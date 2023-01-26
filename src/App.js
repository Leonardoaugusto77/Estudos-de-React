import React, { useState } from 'react'

export default () => {

  const [form, setForm] = useState({'nome':'', 'curso': '', 'ano' : ''})

  const handleFormChange = (e) => {
    if(e.target.getAttribute('name')  == 'fnome' ){
      setForm({'nome': e.target.value, 'curso' : form.curso, 'ano' : form.ano })
    } else if (e.target.getAttribute('name')  == 'fcurso'){
      setForm({'nome' : form.nome, 'curso' : e.target.value, 'ano' : form.ano})
    } else {
      setForm({'nome' : form.nome, 'curso' : form.curso, 'ano' : e.target.value })
    }
  }

  return(
    <>
    
     <div className='Container'>
      <label>Nome: </label>
      <input type='text' name='fnome' value={form.nome} onChange={(e) => handleFormChange(e)}></input> <br/>
      
      <label>Curso: </label>
      <input type='text' name='fcurso' value={form.curso} onChange={(e) => handleFormChange(e)}></input> <br/>
      
      <label>Ano: </label>
      <input type='text' name='fano' value={form.ano} onChange={(e) => handleFormChange(e)}></input> <br/>

     </div>


     <div className='box-1'>
      <p>Nome digitado: {form.nome} </p>
      <p>Curso digitado: {form.curso} </p>
      <p>Ano digitado: {form.ano} </p>
     </div>
    </>
  )
}