// Export to make the function available to other packages



module.exports = { isNullOrEmpty(input) {

    // Returns true if the input is either undefined, null, or empty, false otherwise

    console.log("inside test-da-package");

    return (input === undefined || input === null || input === '');

}}
