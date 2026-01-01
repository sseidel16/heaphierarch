const ogCode =
`int~fibonacci(int~n) {
    int~lFib = 0, fib = 1, nFib = 0;
    
    for (int~i = 2; i <= n; i++) {
        nFib = lFib + fib;
        lFib = fib;
        fib = nFib;
    }
    
    return~fib;
}`;

export const fibCode = ogCode
    .replace(/~/g, ' ');                // Convert ~ to spaces

export const trimmedCode = ogCode
    .replace(/\s+/g, '')                // Remove all whitespace
    .replace(/~/g, ' ');                // Convert ~ to spaces
