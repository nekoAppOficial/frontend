import { Parser } from "simple-text-parser";
const parser = new Parser();

// Define a rule using a regular expression
parser.addRule(/\@[\S]+/gi, function (tag) {
    // Return the tag minus the `@` and surrond with html 
    return (<span className="mention wrapper-1ZcZW- mention interactive contents-2MsGLg mention404" aria-controls="popout_167" aria-expanded="false" tabIndex={0} role="button">
    @{tag.substr(1)}
    </span>)
});

const ParseMessage = (message) => {
    return parser.render(message);    
}

export default ParseMessage