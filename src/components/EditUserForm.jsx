import React from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = ( props ) => {

  console.log(props.currentUser)

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm({defaultValues: props.currentUser});

  setValue( 'name', props.currentUser.name )
  setValue( 'username', props.currentUser.username)

  const onSubmit = (data, e) => {
    props.updateUser(props.currentUser.id, data)
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register("name", {
          required: { value: true, message: "Campo obligatorio...😣" },
          minLength: { value: 2, message: "Minimo dos caracteres 2️⃣" },
        })}
      />
      {errors.name && (
        <span className="red">
          <li>{errors.name.message}</li>
        </span>
      )}

      <label>Username</label>
      <input
        type="text"
        name="username"
        {...register("username", {
          required: { value: true, message: "Campo obligatorio...😣" },
          minLength: { value: 2, message: "Minimo dos caracteres 2️⃣" },
        })}
      />
      {errors.username && (
        <span className="red">
          <li>{errors.username.message}</li>
        </span>
      )}
        
      <button>Edit new user</button>
    </form>
  )
}

export default EditUserForm
