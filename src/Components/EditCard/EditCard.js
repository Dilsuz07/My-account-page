import React from 'react'
import CardImage1 from '../../image/card1.png'
import CardImage2 from '../../image/card2.png'

const EditCard = () => {

    const cards = [
        {
            image: {
                image1: CardImage1,
                image2: CardImage2,
            },
            title: {
                title1: 'Vino Rose',
                title2: 'Fecha & Hora',
                title3: 'Mensaje',
                title4: 'Direccion'
            },
            paragraf: {
                paragraf1: 'Ramo del dia',
                paragraf2: {
                    para1: 'Domingo 20',
                    para2: ' Agosto 2022'
                },
                paragraf3: '12:00 PM - 04:00 PM',
                paragarf4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumendaperiam, alias deleniti atque inventore voluptas recusandae repudiandaesequi ut.',
                paragraf5: 'Lia Busolich Las Hualtates 5951, Vitacura'
            },
            link: '2 item Mas',
            cost: '90.000',
            number: '+56994126425',
            button: {
                btn1: 'Editar Pedido',
                btn2: 'Seguimentof'
            }
        }
    ]

    return (
        cards.map((item, index) => {
            return <div key={index} className='edit-card'>
                <div>
                    <div className='edit-block-1'>
                        <div className='block-1'>
                            <img src={item.image.image1} />
                            <div className='block1-text'>
                                <p className='para1'>{item.title.title1}</p>
                                <p className='para2'>{item.paragraf.paragraf1}</p>
                            </div>
                        </div>
                        <div className='cost-edit'>$90.00</div>
                    </div>
                    <div className='edit-block-1 mt-[.625rem]'>
                        <div className='block-1'>
                            <img src={item.image.image2} />
                            <div className='block1-text'>
                                <p className='para1'>{item.title.title1}</p>
                                <p className='para2'>{item.paragraf.paragraf1}</p>
                            </div>
                        </div>
                        <div className='cost-edit'>$90.00</div>
                    </div>
                </div>
                <div className='item'><u>2 Item Mas</u></div>
                <div className='gap-[5px]'>
                    <p className='edits-title2'>{item.title.title2}</p>
                    <div className='edit-block-2'>
                        <div className='edit-block-2 gap-[10px]'>
                            <p className='edit-para-1'>{item.paragraf.paragraf2.para1}</p>
                            <p>{item.paragraf.paragraf2.para2}</p>
                        </div>
                        <div className='edit-para-1'>{item.paragraf.paragraf3}</div>
                    </div>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <p className='edits-title2'>{item.title.title3}</p>
                    <p className='text-[14px]'>{item.paragraf.paragarf4}</p>
                </div>
                <div>
                    <p className='edits-title2'>{item.title.title4}</p>
                    <div className='edit-block-3'>
                        <p className='font-normal text-[14px] leading-[16px] text-[#9BABBF]'>{item.paragraf.paragraf5}</p>
                        <p>{item.number}</p>
                    </div>
                </div>
                <div className='edit-btn'>
                    <button className='edit-btn1'>Editar Pedido</button>
                    <button className='edit-btn2'>Seguiminto</button>
                </div>
            </div>
        })
    )
}

export default EditCard