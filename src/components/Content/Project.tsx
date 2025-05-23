import { Button, Modal } from 'antd';
import { useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
interface IDetail {
  description: string,
  frontend: string,
  backend: string,
  member: number,
  role: string,
  demo: string,
  github: string
}
interface IDataProject {
  image: JSX.Element,
  title: string,
  shortDescription: string,
  detail: IDetail
}
const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IDataProject | null>(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDataDetail(null)
  };



  const dataProjects: IDataProject[] = [
    {
      image: <FaReact
        style={{
          width: "50px",
          height: "50px",
        }}
        color={'#2bebfd'}
      />,
      title: "Website bán sách kết hợp mạng xã hội",
      shortDescription: "Website bán sách kết hợp mạng xã hội, nơi người dùng có thể đăng bài viết, bình luận và tương tác với nhau",
      detail: {
        description: "Website bán sách kết hợp mạng xã hội, nơi người dùng có thể đăng bài viết, bình luận và tương tác với nhau",
        frontend: "ReactJS, Redux Toolkit, Ant Design",
        backend: "NodeJS (ExpressJS), MongoDB",
        member: 1,
        role: "Developer",
        demo: "https://longtalk.vercel.app/",
        github: "https://github.com/longlephanhai/education_fe"
      }
    },
    {
      image: <FaNodeJs
        style={{
          width: "50px",
          height: "50px",
        }}
        color={'#7CB701'}
      />,
      title: "Quản lý kho hàng",
      shortDescription: "Quản lý kho hàng là một ứng dụng web giúp người dùng quản lý hàng hóa trong kho, theo dõi số lượng, giá trị và tình trạng của hàng hóa.",
      detail: {
        description: "Quản lý kho hàng là một ứng dụng web giúp người dùng quản lý hàng hóa trong kho, theo dõi số lượng, giá trị và tình trạng của hàng hóa.",
        frontend: "ReactJS, Redux Toolkit, Ant Design",
        backend: "NodeJS (ExpressJS), MongoDB",
        member: 1,
        role: "Developer",
        demo: "https://product-manager-lemon.vercel.app/",
        github: "https://github.com/longlephanhai/product-manager"
      }
    },
    {
      image: <SiNestjs
        style={{
          width: "50px",
          height: "50px",
        }}
        color={'#D9224C'}
      />,
      title: "Website hổ trợ học tiếng anh với AI",
      shortDescription: "Website hổ trợ học tiếng anh với AI, nơi người dùng có thể học từ vựng, ngữ pháp và luyện nghe nói với AI",
      detail: {
        description: "Website hổ trợ học tiếng anh với AI, nơi người dùng có thể học từ vựng, ngữ pháp và luyện nghe nói với AI",
        frontend: "ReactJS, Redux Toolkit, Ant Design",
        backend: "NodeJS (NestJS), MongoDB",
        member: 1,
        role: "Developer",
        demo: "https://longtalk.vercel.app/",
        github: "https://github.com/longlephanhai/education_fe"
      }
    }
  ]
  return (
    <>
      <Modal
        title={dataDetail && dataDetail.title ? `Dự án: ${dataDetail.title}` : ""}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        maskClosable={false}
      >
        {
          dataDetail && (
            <ul>
              <li>Miêu tả: {dataDetail.detail.description}</li>
              <li>Frontend: {dataDetail.detail.frontend}</li>
              <li>Backend: {dataDetail.detail.backend}</li>
              <li>Số lượng thành viên: {dataDetail.detail.member}</li>
              <li>Vai trò: {dataDetail.detail.role}</li>
              <li>
                Demo:
                <a href={dataDetail.detail.demo} target='_blank'>
                  {dataDetail.detail.demo}
                </a>
              </li>
              <li>
                Github:
                <a href={dataDetail.detail.github} target='_blank'>
                  {dataDetail.detail.github}
                </a>
              </li>
            </ul>
          )
        }
      </Modal>

      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Projects</h3>
              <span>Các dự án đã hoàn thiện</span>
            </div>
            <div className="list_wrap">
              <ul>
                {
                  dataProjects.map((item, index) => (
                    <li key={index}>
                      <div
                        className="inner"
                        title='Xem chi tiết'
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setDataDetail(item)
                          setIsModalOpen(true)
                        }}
                      >
                        <div className="icon">
                          {item.image}
                        </div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                        <div className='view_detail' style={{ padding: "5px 0" }}>
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight />
                            &nbsp;
                            Xem chi tiết
                          </span>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
