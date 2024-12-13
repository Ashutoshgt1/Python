def rev(x):
    y=x[::-1]
    return (y)
def vow(x):
    c=0
    for i in x:
        if(i=="a" or i=="e" or i=="i" or i=="o" or i=="u"):
            c+=1
    return c
