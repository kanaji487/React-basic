import './FormComponent.css'
const FormComponent = ()=>{
    return(
        <div>
            <form>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type={Text} placeholder="ระบุชื่อรายการของคุณ"/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type={Number} placeholder="+ รายรับ , - รายจ่าย"/>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent