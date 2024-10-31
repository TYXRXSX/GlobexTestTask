import React, { FC } from 'react';
import { User } from '../../model/User.ts';
import './userpopup.css';

const UserPopup: FC<{ user: User, onClose: () => void}> = ({ user, onClose}) => {

    return (
        <div className="popup-overlay modal fade" id="modal-window">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0  popup-content">
                    <div className="d-flex justify-content-between modal-header border-0">
                        <span className="modal-title">{user.name}</span>
                        <div className='modal-close-button' onClick={onClose}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                    <div className="modal-body">
                        <table className="table border-0">
                            <tr>
                                <td>Телефон:</td>
                                <td className="table-data">{user.phone}</td>
                            </tr>
                            <tr>
                                <td>Почта:</td>
                                <td className="table-data">{user.email}</td>
                            </tr>
                            <tr>
                                <td>Дата приема:</td>
                                <td className="table-data">{user.hire_date}</td>
                            </tr>
                            <tr>
                                <td>Должность:</td>
                                <td className="table-data">{user.position_name}</td>
                            </tr>
                            <tr>
                                <td>Подразделение:</td>
                                <td className="table-data">{user.department}</td>
                            </tr>
                            <tr>
                                <td>Адрес:</td>
                                <td className="table-data">{user.address}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="modal-footer border-0 d-flex flex-column align-items-start">
                        <span className="modal-footer-title">Дополнительная информация:</span>
                        <div className="modal-footer-description">
                            {user.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPopup;