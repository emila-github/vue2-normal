var Mock = require('mockjs')
let Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    userCode: "CY" + Mock.Random.natural( 1000, 10000 ),
    trueName: Mock.Random.cname(),
    email: "@email",
    department: "VR",
    status: Mock.Random.integer(1, 2),
    roleId: 10001,
    roleName: '@PICK(["超级管理员", "开发人员", "自定义"])',
    createTime: +new Date(Mock.Random.date()),
    mobile: "13455558585"
  }));
}
// 获取用户列表（分页）
function getUsers (pageSize, pageNo) {
    let mockUsers = Users.filter((user, index) => {
        return index < pageSize * pageNo && index >= pageSize * (pageNo -1)
    });
	return mockUsers
}
function getUsersLength (pageSize, pageNo) {
	return Users.length
}
// 删除用户
function delUser (id) {
    Users = Users.filter((user) => {
        return user.id !== id;
    });
}
// 新增用户
function addUser (params = {}) {
	let user = params
	user.id = Mock.Random.guid()
	user.createTime = Date.now()
	user.roleId = Mock.Random.natural( 1000, 10000 )
    Users.unshift(user);
}
// 更新用户
function updateUser (params = {}) {
	let id = params.userId
	let {userCode, trueName, email, department, status, roleId, roleName, createTime, mobile} = params
	Users.some(user => {
		if (user.id === id) {
			user.userCode = userCode
			user.trueName = trueName
			user.email = email
			user.department = department
			user.status = status
			user.roleId = roleId
			user.roleName = roleName
			user.createTime = +createTime
			user.mobile = mobile
			return true
		}
	})
}
module.exports = {
	Users: Users,
	getUsers: getUsers,
	getUsersLength: getUsersLength,
	delUser: delUser,
	addUser: addUser,
	updateUser: updateUser
};