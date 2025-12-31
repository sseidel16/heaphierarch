export const fibCode =
`int fibonacci(int n) {
    if (n <= 0) return 0;
    
    int lastFib = 0;
    int fib = 1;
    int newFib = 0;
    
    for (int i = 2; i <= n; i++) {
        newFib = lastFib + fib;
        lastFib = fib;
        fib = newFib;
    }
    
    return fib;
}`;
