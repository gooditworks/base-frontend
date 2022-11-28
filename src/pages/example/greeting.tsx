import {ChangeEventHandler, FC, FormEventHandler, useState} from "react"

import trpc from "datasources/trpc"

const useGreetingName = trpc.greeting.greetName.useQuery

const GreetingPage: FC = () => {
  const [name, setName] = useState("")
  const greeting = useGreetingName({name}, {enabled: false})

  const onNameInputChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setName(target.value)
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    greeting.refetch()
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <form onSubmit={onSubmit}>
        <input
          value={name}
          onChange={onNameInputChange}
          type="text"
          className="rounded-xl bg-slate-300 p-2"
        />
        <button
          type="submit"
          className="ml-4 rounded-xl text-white bg-slate-600 py-2 px-4"
        >
          Get greeting
        </button>
      </form>
      {greeting.data && (
        <div className="mt-4">
          <h2 className="text-bold">{greeting.data.greeting}</h2>
          {greeting.data.ip && (
            <p className="asdsad">btw, your ip is {greeting.data.ip}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default GreetingPage
