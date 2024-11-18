import { Button } from "@nextui-org/button";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <Button>Home</Button>;
}
