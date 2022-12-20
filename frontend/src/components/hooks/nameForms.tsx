import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
}

interface IFormInput {
    firstName: String;
    lastName: String;
    gender: GenderEnum;
}

export default function NameForm() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="text-blue-500 flex flex-col justify-center items-center space-y-5">
            <div className="space-x-10">
                <label>First Name</label>
                <input className="border-2" {...register("firstName")} />
            </div>
            <div className="space-x-10">
                <label>Last Name</label>
                <input className="border-2" {...register("lastName")} />
            </div>
            <div className="space-x-10">
                <label>Gender Selection</label>
                <select className="border-2" {...register("gender")} >
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
            </div>
            <input type="submit" />
        </form>
    );
}