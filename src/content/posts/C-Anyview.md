---
title: Anyview程序设计参考代码
date: 2024-12-06T22:22:17+08:00
tags: [Anyview, 程序设计]
abbrlink: '983e5740'
---

## 说明

可能会有些错误，仅供参考！！！

~~请不要做CV工程师~~，系统有查重！

考虑到题库每年都可能更新，题目不一定完全一致。

也欢迎大家PR，纠正更新题库。

<!-- more -->

> [!note] 源码仓库
> [WiseL00k/C_Anyview](https://github.com/WiseL00k/C_Anyview)

## 第1章

### CP01EX025

```c
#include "allinclude.h"  //DO NOT edit this line
int main() 
{ // Add your code here
    printf("Guangdong University of Technology\n");
    printf("Guangzhou\n");
    printf("Jieyang\n");

    return 0;
}
```

### CP01EX055

```c
#include "allinclude.h"  //DO NOT edit this line
int main()  
{
   int a,b,c,max;  
   scanf("%d,%d,%d",&a,&b,&c); /*请输入三个数*/ 

   // Add your code here
   max = a;
   if(max < b)
   {
      max = b;
   }
   if(max < c) 
   {
      max = c;
   }

   printf("max(%d,%d,%d)=%d\n",a,b,c,max);  

   return 0;
}
```

## 第3章

### CP03EX012

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{
    printf("I am a student.\n");
}
```

### CP03EX013

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{
    printf("C Language Program\n");
}
```

### CP03EX023

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{
   printf("I "); //第1个串，末尾加一个空格，但不换行
	   printf("love "); //第2个串，末尾加一个空格，但不换行
	   printf("China\n"); //第3个串显示后换行
}
```

### CP03EX032

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{  // Add your code here
    printf("Apple is red.\n");
    printf("Banana is yellow.\n");
}
```

### CP03EX033

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{  // Add your code here
    printf("HUAWEI Mate60\nHUAWEI Mate60Pro\nHUAWEI Mate60Pro+\n");
}
```

### CP03EX042

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{
    printf("Apple is red.\n");
    printf("\n"); //只换行，实现“隔1行”
    printf("Banana is yellow.\n"); //最后一行显示后，通常也换行
}
```

### CP03EX053

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{  // Add your code here
    //Printf Test
    printf("C Program\n");
}
```

### CP03EX063

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   int a = 7, b = 5;
   int c = a+b;
   int d = a-b;

   printf("%d+%d=%d\n",a,b,c);  /* 修改此语句，显示a+b的值 */
   printf("%d-%d=%d\n",a,b,d);  /* 修改此语句，显示a-b的值 */
}
```

### CP03EX073

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
	 int a = 215, b = 19, c = 75, d,e,f,g;
   d = a/b;
   e = a%b;
   f = a/c;
   g = a%c;

   printf("%d/%d=%d...%d\n",a,b,d,e); 
   printf("%d/%d=%d...%d\n",a,c,f,g);
}
```

### CP03EX076

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{ // Add your code here
   int a = 17, b = 5,c,d,e;
   c = a * b;
   d = a / b;
   e = a % b;
	printf("%d*%d=%d\n",a,b,c); /* 修改此语句，显示a乘b的积c */
   printf("%d/%d=%d\n",a,b,d); /* 修改此语句，显示a除以b的商d */
   printf("%d\%%%d=%d\n",a,b,e); /* 修改此语句，显示a除以b的余数e */
}
```

### CP03EX083

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{ // Add your code here
    printf("%d+%d*%d=%d\n",11,2,3,11+2*3);
}
```

### CP03EX092

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   int a = 11, b = 2, c;
   c = a/b*(b-a%10);

   printf("c=%d\n",c); 
}
```

### CP03EX093

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   int a = 511, b = 246, c =257, d = 495, e;
	e = (a+b)/((b-c)*(a-d));

   printf("(%d+%d)/((%d-%d)*(%d-%d))=%d\n",a,b,b,c,a,d,e);
}
```

### CP03EX103

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{  // Add your code here
   int a = 27, b = 36, c = 7;
	int d = (a+b)/c;

   printf("(%d+%d)/%d=%d\n",a,b,c,d);
}
```

### CP03EX106

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{  // Add your code here
   int a = -25, b = 5;
   int c = a/b;

   printf("c=%d\n",c);
}
```

### CP03EX113

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   int a,b,c = 58;
	a = b = 20;
   int d = (c-a/5)/(c-2*b);
   printf("(%d-%d/5)/(%d-2*%d)=%d\n", c, a, c, b, d);
}
```

### CP03EX123

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{ // Add your code here
	int a = 12, b = 34, c = 56,d;
	d = a * b * c;
	
	printf("%d*%d*%d=%d\n",a,b,c,d);  
}
```

### CP03EX132

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   float a = 1.234, b = 23.456,c,d; 
   c = a+b;
   d = a-b;
   
   printf("%f+%f=%f\n", a, b, c);  // 打印a+b值
   printf("%f-%f=%f\n", a, b, d);  // 打印a-b值
}
```

### CP03EX133

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{  // Add your code here
   float f = 12.345, g = 67.89, h;
   h = f*g;

   printf("%.3f*%.2f=%f\n",f,g,h);
}
```

### CP03EX135

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   float a = 111.234, b = 23.456,c,d;
   c = a*b;
   d = a/b;

   printf("%.3f*%.3f=%f\n",a,b,c);
   printf("%.3f/%.3f=%f\n",a,b,d);
}
```

### CP03EX142

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   float a = 3.45, b = 4.56, c = 5.67;

   printf("%.2f+%.2f+%.2f=%.2f\n",a,b,c,a+b+c);  /*修改此语句，显示a+b+c的值*/
}
```

### CP03EX143

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
	float f = 2.345,g = 6.789,h;
	h = f*f+g*g;

   	printf("%f\n",h);  
}
```

### CP03EX145

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{    //Add your code here
    float f = -2.345, g = 6.789;
    float h = f*f*f + g*g*g;

    printf("%.2f\n",h);
    return 0;  
}
```

### CP03EX153

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  
   int a;
   float b,c;
   // Add your code here
   a = 12;
   b = 345.678;
   c = (float)a*b;

   printf("c=%f\n",c);
}
```

### CP03EX162

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   float a = 1.63, b = 4.46;
   int c = a + b;
	
   printf("c=%d\n",c);  
}
```

### CP03EX163

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  
   int a1,a2;
   float b,c;
   // Add your code here
   b = 34.567,c = 56.789;
   a1 = b*c;
   a2 = (int)b*(int)c;

   printf("a1=%d\n",a1);
   printf("a2=%d\n",a2);
}
```

### CP03EX166

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  
   int a;
   float b,c;
   // Add your code here 
   b = 2.34567, c = 56.789;
   a = (int)b+(int)c;

   printf("a=%d\n",a);
}
```

### CP03EX168

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{
	float  y;
   	y = 1/3;   /*修改此语句，变量y保存表达式1/3的值*/
  	printf("y=%f\n", y); /*修改此语句，输出y*/
   	y = 1.0/3.0;   /*修改此语句，变量y保存表达式1.0/3.0的值*/
   	printf("y=%f\n", y); /*修改此语句，输出y*/
}
```

### CP03EX173

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
	  int a,b;
    a = 34, b = 56;
    a += b;
    b *= a;

  printf("a=%d b=%d\n",a, b);
}
```

### CP03EX175

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
	  int a = 567, b = 18, c = 5;
     a /= b;
     b %= c;

   printf("a=%d b=%d c=%d\n",a,b,c);
}
```

### CP03EX183

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
	int a = 600;
    printf("%d\n",a++);
    printf("%d\n",++a);
}
```

### CP03EX184

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
	int a = 10;
    printf("%d\n",a++);
    printf("%d\n",a);
    printf("%d\n",++a);
    printf("%d\n",a);
}
```

### CP03EX185

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{  // Add your code here
    int a = 1, b = ++a+10,c;
    printf("b=%d ",b);
    c = 10-a++;
    printf("c=%d ",c);
    printf("a=%d\n",a);
}
```

### CP03EX186

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{
	   // Add your code here
   int a = 10,b = 0,c = 0;
   printf("a=%d ",a);

   // Add your code here
   b = ++a+5;
   printf("b=%d ",b);


   // Add your code here
   c = 7+a++;
   printf("c=%d ",c);


   // Add your code here

   printf("a=%d\n",a);
}
```

### CP03EX193

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
	int a = 600;
    printf("%d\n",a--);
    printf("%d\n",--a);
}
```

### CP03EX194

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
    int a = 10;
    printf("%d\n",a--);
    printf("%d\n",a);
    printf("%d\n",--a);
    printf("%d\n",a);
}
```

### CP03EX196

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
	int a = 10, b, c;
    printf("a=%d ",a);
    b = --a+5;
    printf("b=%d ",b);
    c = 7+a--;
    printf("c=%d ",c);
    printf("a=%d\n",a);
}
```

### CP03EX197

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{
	   // Add your code here
   int a,b,c;
   a = 100;
   b = --a-10;
   printf("b=%d ",b);
   

   // Add your code here
   c = 10+a--;
   printf("c=%d ",c);
   printf("a=%d\n",a);
}
```

### CP03EX203

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   int a = 0, b = -20,c;
   c = a>b?b*b:0;

   printf("c=%d\n",c);
}
```

### CP03EX213

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
	  int a = 9, b = 11,c,d;
     c = a >> 2;
     d = b << 2;


   printf("c=%d d=%d\n",c,d);
}
```

### CP03EX223

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   int a = 0x123a, b = 0x1100, c;
   c = a&b;

   printf("%x & %x = %x\n",a,b,c);
}
```

### CP03EX243

```c
#include "allinclude.h"  //DO NOT edit this line

int main()
{  // Add your code here
   int a = 0x12ac,b;
   b = ~a;

	  
   printf("a=%x\n",a);
   printf("b=%x\n",b);
}
```

### CP03EX253

```c
#include "allinclude.h"
#include "allinclude.h"
int main()
{
    int a, b, c;
    int d, e, f;
    scanf("%d,%d,%d", &a, &b, &c);

    //add your code here
    d = a&& b;
    e = a || c;
    f = a && c;
    fprintf(stdout, "\n你的结果：\n");
    printf("%d && %d = %d\n", a, b, d);
    printf("%d || %d = %d\n", a, c, e);
    printf("%d && %d = %d\n", a, c, f);
}
```

### CP03EX263

```c
#include "allinclude.h"
int main()
{
    int a, b;
    int c, d;
    scanf("%d,%d", &a, &b);

    //add your code here
    c = !a;
    d = !b;


    fprintf(stdout, "\n你的结果：\n");
    printf("!%d=%d\n", a, c);
    printf("!%d=%d\n", b, d);
}
```

### CP03EX293

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{   
    char a, b, c;
    //add your code here
    a = 'O';
    b = 'K';
    c = '!';


    printf("%c:%d %c:%d %c:%d\n",a,a,b,b,c,c);
}
```

### CP03EX303

```c
#include "allinclude.h"
int main()
{
   //add your code here
   int a, b, c;
   a = 79, b = 75, c = 33;

   printf("%d:%c %d:%c %d:%c\n", a, a, b, b, c, c);
}
```

### CP03EX305

```c
#include "allinclude.h"  //DO NOT edit this line
int main()
{
   //add your code here 
   int a, b, c, d, e;
   a = 83, b = 116, c = 117, d = 100, e = 121;


   printf("%c%c%c%c%c\n",a,b,c,d,e);
}
```

### CP03EX542

```c
#include "allinclude.h"

int main(int a,int b)
{ //add your code here
  b = a-a%10;
  printf("b=%d,a=%d\n", b, a);
}
```

### CP03EX546

```c
#include "allinclude.h"  //DO NOT edit this line
int main(int a,int b)
{   //add your code here
   b = a - a%100 + a%10;

   printf("a=%d,b=%d\n", a, b);
}
```

### CP03EX554

```c
#include "allinclude.h"  //DO NOT edit this line
int main(int a, int b)
{ //add your code here
   b = a%100;

   printf("a=%d,b=%d\n", a, b);
}
```

### CP03EX556

```c
#include "allinclude.h"  //DO NOT edit this line
int main(int a, int b)
{  //add your code here
    b = (a/100)*100 + 10*(a%10)+(a/10)%10;
 printf("a=%d,b=%d\n", a, b);
}
```

### CP03EX557

```c
#include "allinclude.h"  //DO NOT edit this line
int main(int a, int b)
{  // add your code here
   int digt_1,digt_2,digt_3;
   digt_1 = a/100%10;
   digt_2 = a/10%10;
   digt_3 = a%10;
   b = digt_2+digt_1*10+digt_3*100;

   printf("a=%d,b=%d\n", a, b);
}
```

### CP03EX558

```c
#include "allinclude.h"  //DO NOT edit this line
int main(int a)
{   //add your code here
   int digt_1,digt_2,digt_3;
   digt_1 = a/100%10;
   digt_2 = a/10%10;
   digt_3 = a%10;
   a = digt_2*100+digt_3*10+digt_1;
   printf("移位后：a = %d\n", a);
}
```

### CP03EX560

```c
#include "allinclude.h"
int main(int a,int b,int c)
{  //add your code here
   int digt_a1,digt_b1;
   digt_a1 = a%10;
   digt_b1 = b%10;
   c = digt_a1*10+digt_b1;


   printf("a=%d,b=%d,c=%d\n", a, b, c);
}
```

### CP03EX561

```c
#include "allinclude.h"
int main(int a,int b,int c)
{   // add your code here
    int digt_a1,digt_b1;
   digt_a1 = a%10;
   digt_b1 = b%10;
   c = digt_b1*10+digt_a1;


    printf("a=%d,b=%d,c=%d\n", a, b, c);
}
```

### CP03EX562

```c
#include "allinclude.h"
int main(int a,int b,int c)
{   // add your code here
    int digt_a,digt_b;
    digt_a = a%100;
    digt_b = b%100;
    c = digt_a*100+digt_b;

    printf("a=%d,b=%d,c=%d\n", a, b, c);
}
```

### CP03EX563

```c
#include "allinclude.h"
int main(int a,int b,int c)
{   // add your code here
    int digt_a,digt_b;
    digt_a = a%10*10+a/10%10;
    digt_b = b%10*10+b/10%10;
    c = digt_a*100+digt_b;


    printf("a=%d,b=%d,c=%d\n", a, b, c);
}
```

### CP03EX566

```c
#include "allinclude.h"
int main(int a,int b,int c)
{  // add your code here
    int digt_a,digt_b;
    digt_a = a%1000;
    digt_b = b%1000;
    c = digt_a*1000+digt_b;


   printf("a=%d,b=%d,c=%d\n", a, b, c);
}
```

### CP03EX567

```c
#include "allinclude.h"
int main(int a, int b, long int c)
{ 
    //add your code here
    int digt_a,digt_b;
    digt_a = a%10*100+a/10%10*10+a/100%10;
    digt_b = b%10*100+b/10%10*10+b/100%10;
    c = digt_a*1000+digt_b;

    printf("a=%d,b=%d,c=%d\n", a, b, c);
}
```

## 第8章

### CP08EX011

```c
#include "allinclude.h"  //DO NOT edit this line
void func(char s[], char t[], int n) 
/* 数组s的前n个元素存放给定的字符序列，
   数组t的前n个元素存放s的逆序列。
   注意：数组的下标从0开始。
*/
{ // Add your code here
   for(int i = 0; i < n; i++)
   {
      t[i] = s[n-i-1];
   }

}
```

### CP08EX012

```c
#include "allinclude.h"  //DO NOT edit this line
void func(char *s, char *t) 
/* s是给定字符串的起始地址，
   t是求得s的逆串的起始地址
*/
{  // Add your code here
   int length = 0;
   for(length = 0; s[length] != '\0'; length++);
   for(int i = 0; i < length; i++)
   {
      t[length-1-i] = s[i];
   }
}
```

### CP08EX015

```c
#include "allinclude.h"  //DO NOT edit this line
#include <algorithm>
void func(char *s1, char *s2, int n)
/* s1为字符串的起始地址，s2为新字符串的起始地址，n为字符串的长度。
   要求：s1串不能发生改变；请用s2串存放新的字符串。
*/
{  // Add your code here
   for(int i = 0; i < n; i++)
   {
      s2[i] = s1[i];
   }
   if(n > 2)
   {
      sort(s2+1,s2+n-1,greater<char>());
   }
}
```

### CP08EX016

```c
#include "allinclude.h"  //DO NOT edit this line
#include <algorithm>
void func(char *s1, char *s2)
{  // Add your code here
    int n = 0;
    for(int i = 0; s1[i] != '\0'; i++)
    {
        s2[i] = s1[i];
        n++;
    }
    if(n > 2)
    {
        sort(s2+1,s2+n-1,greater<char>());
    }

}
```

### CP08EX018

```c
#include "allinclude.h"  //DO NOT edit this line
#include <algorithm>
void sub_str(char *s, int m, char *t)
{  
    int n = 0, i = 0, j = 0;
    *t = '\0';
    for(int i = 0; s[i] != '\0'; i++)
        n++;

    for(i = m,j = 0; s[i] != '\0'; i++,j++)
    {
        t[j] = s[i];
    }
    t[j] = '\0';
    if(m < n)
        sort(t,t+j);
}
```

### CP08EX020

```c
#include "allinclude.h"  //DO NOT edit this line
char *match(char *s, char c) // 返回字符c在串s中首次出现的位置指针
{  // Add your code here
   while(*s != '\0')
   {
      if(*s == c)
         return s;
      s++;
   }

   return NULL;
}
```

### CP08EX033

```c
#include "allinclude.h"  //DO NOT edit this line
int month_day(int year, int yearday, int *pmonth, int *pday) 
{  // Add your code here
    if(year <= 0)
        return 0;
    *pmonth = 1;
    *pday = 0;
    int monthDays[13] = {0,31,28,31,30,31,30,31,31,30,31,30,31};
    if((year % 4 == 0 and year % 100 != 0) or (year % 400 == 0))
    {
        if(yearday <= 0 || yearday > 366)
            return 0;
        monthDays[2] = 29;
    }
    else {
        if(yearday <= 0 || yearday > 365)
            return 0;
    }
    for(int i = 1; i <= 12; i++)
    {
        if(yearday <= monthDays[i])
        {
            *pday = yearday;
            break;
        }
        yearday -= monthDays[i];
        (*pmonth)++;
    }
    return 1;
}
```

### CP08EX044

```c
#include "allinclude.h"  //DO NOT edit this line
long func(char *s) 
{ // s是一个数字字符串；函数返回值为由s含有的数字字符转换得到的数
  // Add your code here
  long num = 0;
  int firstFlag = false, firstNumFlag = false;
  for(int i = 0; s[i] != '\0'; i++)
  {
    if(s[i] == '-' && !firstNumFlag)
      firstFlag = true;
    if(s[i] >= '0' && s[i] <= '9')
    {
      firstNumFlag = true;
      num *= 10;
      num += s[i]-'0';
    }
  }
  if(firstFlag)
    num *= -1;
  return num;
}
```

### CP08EX105

```c
#include "allinclude.h"  //DO NOT edit this line
int findmax(int s[], int n) 
/* 返回s中的n个整数的最大值。注意：要求在函数中采用指针（而不是下标）来处理数组元素。
*/
{  // Add your code here
    int max = 0;
    for(int i = 0; i < n; i++)
    {
        if(max < *(s+i))
            max = *(s+i);
    }
    return max;
}
```

### CP08EX124

```c
#include "allinclude.h"  //DO NOT edit this line
int min3adj(int s[], int n) // 返回数组s中相邻三个数的和中的最小值。
{  // Add your code here
    int sum = s[0]+s[1]+s[2];
    for(int i = 1; i < n-1; i++)
    {
        if(sum > s[i-1] + s[i] + s[i+1])
            sum = s[i-1] + s[i] + s[i+1];
    }
    return sum;
}
```



## 未完待续...

[By WiseL00k](https://github.com/WiseL00k)
