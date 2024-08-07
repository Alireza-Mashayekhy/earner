import { Avatar, Button, Input } from "@chakra-ui/react";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <div className="flex flex-col justify-center">
        <div className="flex w-full justify-center">
          <Avatar
            size="xl"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </div>
        <h3 className="mt-4 text-center text-2xl font-bold">امیر احمدی</h3>
        <p className="mt-3 text-gray-300">نام کاربری: MrMeshky</p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <Input
          placeholder="رمز عبور"
          dir="ltr"
          width="100%"
          borderRadius="12px"
          backgroundColor="#252a34"
          height="60px"
          border="1px"
          borderColor="#445167"
          type="password"
          className="placeholder:!text-right"
        />
        <Input
          placeholder="ایمیل"
          dir="ltr"
          width="100%"
          borderRadius="12px"
          backgroundColor="#252a34"
          height="60px"
          border="1px"
          borderColor="#445167"
          type="email"
          className="placeholder:!text-right"
        />
        <Input
          placeholder="شماره موبایل"
          dir="ltr"
          width="100%"
          borderRadius="12px"
          backgroundColor="#252a34"
          height="60px"
          border="1px"
          borderColor="#445167"
          type="number"
          className="placeholder:!text-right"
        />
      </div>
      <Button
        width="100%"
        textColor="#fff"
        borderRadius="16px"
        backgroundColor="#2788ff"
        _hover={{ backgroundColor: "#267ce6" }}
        height="60px"
        marginTop="20px"
      >
        تغیر رمز
      </Button>
    </div>
  );
}
