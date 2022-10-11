import React from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

const RecordationTable = () => {
    return (
        <div className='recor-table-block'>
            <div className='recor-table'>
                <p className='recor-title'>Agosto 2022</p>
                <div className='recor-icon'><MdNavigateBefore className='text-[30px] text-[#D96581]' /></div>
                <div className='recor-icon'><MdNavigateNext className='text-[30px] text-[#D96581]' /></div>
            </div>
            <table>
                <thead>
                    <tr className='p-[1rem]'>
                        <th className='p-[1rem]'>DOM</th>
                        <th className='p-[1rem]'>LUN</th>
                        <th className='p-[1rem]'>MAR</th>
                        <th className='p-[1rem]'>MIE</th>
                        <th className='p-[1rem]'>JUE</th>
                        <th className='p-[1rem]'>VIE</th>
                        <th className='p-[1rem]'>SAB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-[#9BABBF] p-[1.5rem]'><del>29</del></td>
                        <td className='text-[#9BABBF] p-[1.5rem]'><del>30</del></td>
                        <td className='p-[1.5rem]'>1</td>
                        <td className='p-[1.5rem]'>2</td>
                        <td className='p-[1.5rem]'>3</td>
                        <td className='p-[1.5rem]'>4</td>
                        <td className='p-[1.5rem]'>5</td>
                    </tr>
                    <tr>
                        <td className='p-[1.5rem]'>6</td>
                        <td className='p-[1.5rem]'>7</td>
                        <td className='p-[1.5rem]'>8</td>
                        <td className='p-[1.5rem]'>9</td>
                        <td className='p-[1.5rem]'>10</td>
                        <td className='p-[1.5rem]'><span className='border-b-[2px] border-b-[#D96581]'>11</span></td>
                        <td className='p-[1.5rem]'>12</td>
                    </tr>
                    <tr>
                        <td className='p-[1.5rem]'>13</td>
                        <td className='p-[1.5rem]'>14</td>
                        <td className='p-[1.5rem]'>15</td>
                        <td className='p-[1.5rem]'>16</td>
                        <td className='p-[1.5rem]'>17</td>
                        <td className='p-[1.5rem]'>18</td>
                        <td className='p-[1.5rem]'>19</td>
                    </tr>
                    <tr>
                        <td className='p-[1.5rem]'><span className='w-[60px] h-[60px] p-[10px] rounded-[50%] border-[1px] border-[#D96581]'>20</span></td>
                        <td className='p-[1.5rem]'>21</td>
                        <td className='p-[1.5rem]'>22</td>
                        <td className='p-[1.5rem]'>23</td>
                        <td className='p-[1.5rem]'>24</td>
                        <td className='p-[1.5rem]'>25</td>
                        <td className='p-[1.5rem]'>26</td>
                    </tr>
                    <tr>
                        <td className='p-[1.5rem]'>27</td>
                        <td className='p-[1.5rem]'>28</td>
                        <td className='p-[1.5rem]'><span className='border-b-[2px] border-b-[#D96581]'>30</span></td>
                        <td className='p-[1.5rem]'>31</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RecordationTable