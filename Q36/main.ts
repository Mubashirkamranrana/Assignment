//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size: string ="large", message: string = "I love Typescript"): void {
    console.log(`Creating ${size} t-shirt with the message: ${message}`);
}
make_shirt(); //with default size and message
make_shirt("medium"); //with medium size and message
make_shirt("small", "Hello World!"); //with small size and customized message
export{}