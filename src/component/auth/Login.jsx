import { Form, Input, Button, Dropdown } from "antd";
import { useDispatch } from "react-redux";
import { post_login, post_register } from "../../redux/actions/index";
//hiraukan
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  //hiraukan
  const history = useHistory();
  
  const login = (values) => {
    dispatch(post_login(values, history));
  };

  return (
    <div>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={login}
        style={{ width: "79%", marginTop: 50, marginLeft: 30 }}
        size="large"
      >
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </div>
  );
};

export default Login;
