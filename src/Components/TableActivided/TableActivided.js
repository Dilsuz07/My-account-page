import React from 'react'

const TableActivided = () => {
    return (
        <div className='table-activided mt-[3rem] mb-[2rem]'>
            <p className='table-text'>Tu Actividad reciente</p>
            <table className='mt-[20px]'>
                <thead>
                    <tr className='grid-block-th bg-[#F8F8F8] rounded-[10px]'>
                        <th className='col-span-2 th-text'>Fecha</th>
                        <th className='col-span-2 th-text'>Tipo</th>
                        <th className='col-span-3 th-text'>Accion</th>
                        <th className='col-span-2 th-text pl-[25px]'>Puntos</th>
                        <th className='col-span-2 th-text'>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='grid-block'>
                        <td className='col-span-2'>20/09/22</td>
                        <td className='col-span-2'>Actividad</td>
                        <td className='col-span-3'>Subscribe a nuestra lista de correa</td>
                        <td className='col-span-2 pl-[25px]'>10.000</td>
                        <td className='col-span-3 flex justify-center items-center'>
                            <div className='line-table'>
                                <div className='line2-table'>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className='grid-block'>
                        <td className='col-span-2'>20/09/22</td>
                        <td className='col-span-2'>Actividad</td>
                        <td className='col-span-3'>Subscribe a nuestra lista de correa</td>
                        <td className='col-span-2 pl-[25px]'>10.000</td>
                        <td className='col-span-3 flex justify-center items-center'>
                            <div className='line-table justify-center items-center'>
                                <div className='line2-table'>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className='grid-block border-b-[0] pb-[0]'>
                        <td className='col-span-2'>20/09/22</td>
                        <td className='col-span-2'>Actividad</td>
                        <td className='col-span-3'>Subscribe a nuestra lista de correa</td>
                        <td className='col-span-2 pl-[25px]'>10.000</td>
                        <td className='col-span-3 flex justify-center items-center'>
                            <div className='line-table justify-center items-center'>
                                <div className='line2-table'>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableActivided