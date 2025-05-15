import React, { useState } from "react";
import { Form, Input, Button, Select, Typography, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; 
import "./Login.css";

const { Title } = Typography;
const { Option } = Select;

const Login = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);  
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = async (values) => {
    const { username, password, role } = values;

    if (isRegistering) {
      try {
        setLoading(true);

        if (!username || !password || !role) {
          message.error("Lütfen tüm alanları doldurun!");
          return;
        }

        const response = await axios.get(
          "https://v1.nocodeapi.com/ppppssa/google_sheets/YPjUqQxNxAxJxoWl?tabId=Sayfa1"
        );

        const existingUsers = response.data.data;

        const isUsernameTaken = existingUsers.some(
          (user) => user.username.trim().toLowerCase() === username.trim().toLowerCase()
        );

        if (isUsernameTaken) {
          message.error("Bu kullanıcı adı zaten alınmış. Lütfen başka bir kullanıcı adı seçin.");
          return;
        }

        const dataToSend = [
          [username, password, role], 
        ];

        const postResponse = await axios.post(
          "https://v1.nocodeapi.com/ppppssa/google_sheets/YPjUqQxNxAxJxoWl?tabId=Sayfa1",
          dataToSend,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (postResponse.status === 200) {
          message.success("Kayıt başarılı! Artık giriş yapabilirsiniz.");
          setIsRegistering(false); 
        }
      } catch (error) {
        console.error("Kayıt sırasında bir hata oluştu:", error.response?.data || error.message);
        message.error("Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.");
      } finally {
        setLoading(false);
      }
    } else {
     
      try {
        setLoading(true);
        const response = await axios.get(
          "https://v1.nocodeapi.com/ppppssa/google_sheets/YPjUqQxNxAxJxoWl?tabId=Sayfa1"
        );

        const data = response.data.data;

        const user = data.find(
          (row) =>
            row.username.trim().toLowerCase() === username.trim().toLowerCase() &&
            row.password.trim() === password.trim()
        );

        if (user) {
          message.success("Giriş başarılı!");
          localStorage.setItem("user", JSON.stringify(user)); 
          onLogin(user.username, user.role); 
          navigate("/home"); 
        } else {
          message.error("Hatalı kullanıcı adı veya şifre!");
        }
      } catch (error) {
        console.error("Giriş sırasında bir hata oluştu:", error.response?.data || error.message);
        message.error("Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="login-container">
      <Header username={null} /> {}
      <Title level={2} className="login-title">
        {isRegistering ? "Kayıt Ol" : "Giriş Yap"}
      </Title>
      <Form
        className="login-form"
        onFinish={handleSubmit}
        layout="vertical"
        initialValues={{ role: "user" }}
      >
        {isRegistering ? (
          <>
            <Form.Item
              label="Yeni Kullanıcı Adı"
              name="username"
              rules={[{ required: true, message: "Lütfen kullanıcı adınızı girin!" }]}
            >
              <Input placeholder="Yeni Kullanıcı Adı" />
            </Form.Item>
            <Form.Item
              label="Yeni Şifre"
              name="password"
              rules={[{ required: true, message: "Lütfen şifrenizi girin!" }]}
            >
              <Input.Password placeholder="Yeni Şifre" />
            </Form.Item>
            <Form.Item
              label="Rol"
              name="role"
              rules={[{ required: true, message: "Lütfen bir rol seçin!" }]}
            >
              <Select>
                <Option value="user">Kullanıcı</Option>
                <Option value="admin">Yönetici</Option>
              </Select>
            </Form.Item>
          </>
        ) : (
          <>
            <Form.Item
              label="Kullanıcı Adı"
              name="username"
              rules={[{ required: true, message: "Lütfen kullanıcı adınızı girin!" }]}
            >
              <Input placeholder="Kullanıcı Adı" />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name="password"
              rules={[{ required: true, message: "Lütfen şifrenizi girin!" }]}
            >
              <Input.Password placeholder="Şifre" />
            </Form.Item>
          </>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            {isRegistering ? "Kayıt Ol" : "Giriş Yap"}
          </Button>
        </Form.Item>
      </Form>
      <Button
        type="link"
        onClick={() => setIsRegistering(!isRegistering)}
        className="toggle-button"
      >
        {isRegistering ? "Giriş Yap" : "Kayıt Ol"}
      </Button>
    </div>
  );
};

export default Login;