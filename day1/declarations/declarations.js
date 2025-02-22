const escapeStr = "` \\ / \" ' ";
const arr = Object.freeze([4, "2"])
const obj = Object.freeze({
    str: "Hello",
    num: 1,
    bool: true,
    undef: undefined,
    nested: Object.freeze({
        arr: [4, undefined, '2'],
        obj: {
            str: "Hi",
            num: 1,
            bool: true
        }
    })
})