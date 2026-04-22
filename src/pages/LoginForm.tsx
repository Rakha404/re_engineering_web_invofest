import { useForm } from "react-hook-form";
import { InputText } from "../components/InputText";
import { InputPassword } from "../components/InputPassword";
import Button from "../components/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormData = {
    email: string;
    password: string;
};

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
})

export default function LoginForm() {
    const { register,
        handleSubmit,
        formState: { errors } }
        = useForm<FormData>({
            resolver: zodResolver(schema)
        });

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="Email"
                    nama="email"
                    register={register}
                    error={errors.email?.message}
                />

                <InputPassword
                    label="Password"
                    nama="password"
                    register={register}
                    error={errors.password?.message}
                />

                <div>
                    <Button title="login" />
                </div>
            </form>
        </div>
    );
}