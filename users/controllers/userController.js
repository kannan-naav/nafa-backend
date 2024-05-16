
module.exports = {
    login: async (req, res, next) => {
        try {
            const { email, password, role } = req.body

            if (!email || !password)
                return res.status(400).json({ success: false, errors: { toast: 'Please fill all fields' } })

            res.status(200).json({
                success: true,
                user: {
                    name: user.name,
                    _id: user._id,
                    email: user.email,
                    profileImage: user.profileImage,
                    role: user.role,
                    status: user.status,
                    accessToken: token,
                },
            })
        } catch (error) {
            next(error)
        }
    },

    signup: async (req, res, next) => {
        try {
            const { email, password, role, otp } = req.body

            res.status(200).json({
                success: true,
                user: {
                    name: user.name,
                    _id: user._id,
                    email: user.email,
                    profileImage: user.profileImage,
                    role: user.role,
                    status: user.status,
                    accessToken: token,
                },
            })
        } catch (error) {
            next(error)
        }
    },

    logoutUser: (req, res, next) => {
        try {
            res.status(200).json({ success: true, message: 'Logged out successfully' })
        } catch (error) {
            next(error)
        }
    },

}