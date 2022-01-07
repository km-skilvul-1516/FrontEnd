import { Form, Input, Button, Dropdown, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { post_login, post_register, get_quiz } from "../../redux/actions/index";
//hiraukan
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const [countSoal, setCount] = useState(0);

  useEffect(() => {
    dispatch(get_quiz());
  }, [dispatch])

  const history = useHistory();
  const mainState = useSelector(state => state?.main)
  const soal = mainState?.soal
  
  console.log('inisoal', soal);
  const login = (values) => {
    dispatch(post_login(values, history));
  };

  const logger = (changedValues) => {
    console.log(changedValues);
  };


  return (
    <div>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={login}
        onValuesChange={logger}
        style={{ width: "79%", marginTop: 50, marginLeft: 30 }}
        size="large"
      >
        {
          !soal ?
          null
          :
          soal.map((soal) => {
            return(
              soal.isiQuiz.map((isiSoal) => {
                console.log(isiSoal)
                return(
                  <Form.Item name="soal-1" label={isiSoal.soal}>
                  <Radio.Group>
                    <Radio value="a">{isiSoal.pilihanA}</Radio>
                    <Radio value="b">{isiSoal.pilihanB}</Radio>
                    <Radio value="c">{isiSoal.pilihanC}</Radio>
                    <Radio value="d">{isiSoal.pilihanD}</Radio>
                  </Radio.Group>
                  </Form.Item>
                )
              })
            )

          })
        }      
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Answer
          </Button>
        </Form.Item>
      </Form>

    </div>
  );
};

export default Login;
