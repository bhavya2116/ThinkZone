router.post('/', [
    check("userName", "UserName is reuired").not().isEmpty(),
    check("email", "email is requird").not().isEmail()
], (req, res) => {
    cosole.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {

    } catch {

    }
});
router.get('/', async(req, res) => {
    try {
        const user = await User.findOne(email)
    } catch (error) {
        console.error(error.error)
    }
})
router.patch('/update', (req, res) => {
    try {
        const user = await User.findByIdAndUpdate()
    } catch (error) {
        console.error(error.msg)
    }
});

router.delete('/delete', (req, res) => {
    try {
        const user = await User.findByIdAndDelete()
    } catch (error) {
        console.error(errror.message)
    }
})