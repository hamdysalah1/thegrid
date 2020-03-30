import { Container } from "./container";
import { Row } from "./row";
import { Col } from "./col";
import { breakPoint } from "./breakPoints";

export { Row, breakPoint, Col, Container };
exports.printMsg = function() {
    console.log("This is a message from the demo package");
}