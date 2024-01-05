import { useDispatch } from 'react-redux'
import './index.scss'
import { Button, Card ,Form,Input, message} from "antd"
import { fetchLogin } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'
const Login = ()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    //获取表单数据
    const onFinish=async(formValue)=>{
        await dispatch(fetchLogin(formValue))
        navigate('/')
        message.success('登录成功')
    }
    return (
        <div className='login'>
            <Card className='card'>
                <div className='logo'>
                    <img src={require('@/assets/logo.png')} alt='logo'></img>
                </div>
                <Form validateTrigger="onBlur" onFinish={onFinish}>
                    <Form.Item
                    name="mobile"
                    rules={[
                        {
                        required: true,
                        message: '请输入手机号',
                        },
                        {
                            pattern:/^1[3-9]\d{9}$/,
                            message:'请输入正确的手机号'
                        }
                    ]}
                    >
                    <Input placeholder='请输入手机号' />
                    </Form.Item>
                    <Form.Item
                    name="code"
                    rules={[
                        {
                        required: true,
                        message: '请输入验证码',
                        },
                    ]}
                    >
                    <Input.Password  placeholder='请输入验证码'/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' size='large' block>登录</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default Login