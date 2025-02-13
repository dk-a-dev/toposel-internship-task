import pkg from 'bcryptjs';
const { hash, compare } = pkg;

export const hashPassword = async (password) => {
    return await hash(password, 8);
};

export const comparePasswords = async (plainPassword, hashedPassword) => {
    return await compare(plainPassword, hashedPassword);
};

export const passwordMiddleware = function(schema) {
    schema.pre("save", async function(next) {
        if (this.isModified("password")) {
            this.password = await hashPassword(this.password);
        }
        next();
    });

    schema.methods.comparePassword = async function(password) {
        return await comparePasswords(password, this.password);
    };
};

