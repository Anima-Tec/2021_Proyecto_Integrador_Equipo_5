/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import content from '../static/login';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={key}>
            <p>
              <label>
                {input.label}
              </label>
            </p>
            <p>
              <input name={input.name} type={input.type} ref={register} />
            </p>
          </div>
        ))}
        <button type="submit">INGRESAR</button>
        <p>Eres nuevo? Realizar test</p>
      </form>
    </div>
  );
}
