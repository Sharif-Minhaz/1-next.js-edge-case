const data = [
	{ id: 1, email: "minhaz@gmail.com", password: "123456789" },
	{ id: 2, email: "sharif@gmail.com", password: "123456789" },
];

export const getUserByEmail = (email: string) => {
	const user = data.find((data) => data.email === email);

	return user;
};
