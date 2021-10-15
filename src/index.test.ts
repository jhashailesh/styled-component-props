import * as index from "./index"
// @ponicode
describe("index.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.default(false, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.default("Jean-Philippe", {})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.default(12, {})
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.default(987650, 1000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.default(12345, 1000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.default(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
