import { NextRequest } from "next/server";

const users = [
  {
    id: 1,
    name: "Hewerton Adão",
    email: "hewerton80@gmail.com",
    password: "123456789",
  },
];

export async function POST(request: NextRequest) {
  const { email, password } = (await request.json()) as {
    email: string;
    password: string;
  };
  console.log(email, password);
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return Response.json({ user }, { status: 201 });
  }
  return Response.json(null, { status: 406 });
}
