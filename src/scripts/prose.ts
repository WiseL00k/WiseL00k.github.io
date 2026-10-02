function enhanceCodeBlocks() {
  for (const pre of document.querySelectorAll<HTMLPreElement>('.prose pre')) {
    if (pre.parentElement?.classList.contains('code-block')) continue;

    const wrapper = document.createElement('div');
    wrapper.className = 'code-block';
    pre.before(wrapper);
    wrapper.append(pre);

    const tools = document.createElement('div');
    tools.className = 'code-tools';

    const lang = pre.dataset.language;
    if (lang && lang !== 'plaintext' && lang !== 'text') {
      const label = document.createElement('span');
      label.className = 'code-lang';
      label.textContent = lang;
      tools.append(label);
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy';
    button.textContent = '复制';
    button.setAttribute('aria-label', '复制代码');
    button.addEventListener('click', async () => {
      const text = pre.querySelector('code')?.innerText ?? pre.innerText;
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = '已复制';
        button.dataset.copied = '';
      } catch {
        button.textContent = '复制失败';
      }
      setTimeout(() => {
        button.textContent = '复制';
        delete button.dataset.copied;
      }, 1600);
    });
    tools.append(button);
    wrapper.append(tools);
  }
}

function trackToc() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-toc-link]')];
  if (links.length === 0) return;

  const ids = [...new Set(links.map((a) => a.dataset.tocLink ?? ''))];
  const headings = ids
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el !== null);

  let active = '';
  let queued = false;

  const update = () => {
    queued = false;
    const line = window.innerHeight * 0.28;
    let current = headings[0]?.id ?? '';
    for (const heading of headings) {
      if (heading.getBoundingClientRect().top > line) break;
      current = heading.id;
    }
    if (current === active) return;
    active = current;
    for (const link of links) {
      const on = link.dataset.tocLink === current;
      link.toggleAttribute('data-active', on);
      const aside = on ? link.closest<HTMLElement>('.toc-aside') : null;
      if (!aside) continue;
      const top = link.offsetTop;
      const visible = top > aside.scrollTop + 32 && top < aside.scrollTop + aside.clientHeight - 48;
      if (!visible) aside.scrollTop = top - aside.clientHeight / 2;
    }
  };

  addEventListener(
    'scroll',
    () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
  update();
}

enhanceCodeBlocks();
trackToc();

export {};
