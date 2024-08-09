import Meals from "@/components/Meals"

export const metaData = {
  title: {
    absolute: "Meals"
  },
  description: "Meals Page",
}

const MealsPage = () => {
  return (
    <div className='p-12'>
      <h1 className='text-3xl font-semibold text-red-400'>Choose You Meals</h1>
      <p>Choose meals of you choice by searching.....</p>
      <Meals />
    </div>
  )
}

export default MealsPage
