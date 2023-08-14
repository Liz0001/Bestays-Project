export function validatePassword(password: string) {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialSymbolRegex = /[!@#$%^&*]/;

    // const hasUppercase = uppercaseRegex.test(password);
    // const hasLowercase = lowercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasSpecialSymbol = specialSymbolRegex.test(password);
    const isWithinLengthRange = password.length >= 6;

    return (
        // hasUppercase &&
        // hasLowercase &&
        hasDigit && hasSpecialSymbol && isWithinLengthRange
    );
}
