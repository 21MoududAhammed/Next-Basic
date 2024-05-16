import Button from "../components/Button";

export default function Analytics() {
  return (
    <div>
      <h1 className="text-3xl">Analytics</h1>
      <Button path="/dashboard">Dashboard</Button> <br /> <br />
      <Button path="/dashboard/settings">Settings</Button>
    </div>
  );
}
