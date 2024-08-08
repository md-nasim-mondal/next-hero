import Meals from "@/components/Meals"
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
