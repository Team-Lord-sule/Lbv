const { config } = global.GoatBot;
const { writeFileSync } = require("fs-extra");
const { commands, aliases } = global.GoatBot;

module.exports = {
  config: {
    name: "admin2",
    version: "1.7",
    author: "NTKhang",
    countDown: 5,
    role: 2,
    description: {
      vi: "Thêm, xóa, sửa quyền admin hoặc xem danh sách lệnh không hoạt động",
      en: "Add, remove, edit admin role or view list of commands not working"
    },
    category: "box chat",
    guide: {
      vi: ' {pn} [add | -a] <uid | @tag>: Thêm quyền admin cho người dùng'
      + '\n {pn} [remove | -r] <uid | @tag>: Xóa quyền admin của người dùng'
      + '\n {pn} [list | -l]: Liệt kê danh sách admin'
      + '\n {pn} [broken | -b]: Xem danh sách lệnh không hoạt động',
      en: ' {pn} [add | -a] <uid | @tag>: Add admin role for user'
      + '\n {pn} [remove | -r] <uid | @tag>: Remove admin role of user'
      + '\n {pn} [list | -l]: List all admins'
      + '\n {pn} [broken | -b]: View list of commands not working'
    }
  },

  langs: {
    vi: {
      added: "✅ | Đã thêm quyền admin cho %1 người dùng:\n%2",
      alreadyAdmin: "\n⚠ | %1 người dùng đã có quyền admin từ trước rồi:\n%2",
      missingIdAdd: "⚠ | Vui lòng nhập ID hoặc tag người dùng muốn thêm quyền admin",
      removed: "✅ | Đã xóa quyền admin của %1 người dùng:\n%2",
      notAdmin: "⚠ | %1 người dùng không có quyền admin:\n%2",
      missingIdRemove: "⚠ | Vui lòng nhập ID hoặc tag người dùng muốn xóa quyền admin",
      listAdmin: "👑 | Danh sách admin:\n%1",
      brokenCmds: "⚠ | Danh sách lệnh không hoạt động:\n%1",
      noBrokenCmds: "✅ | Không có lệnh nào không hoạt động"
    },
    en: {
      added: "✅ | Added admin role for %1 users:\n%2",
      alreadyAdmin: "\n⚠ | %1 users already have admin role:\n%2",
      missingIdAdd: "⚠ | Please enter ID or tag user to add admin role",
      removed: "✅ | Removed admin role of %1 users:\n%2",
      notAdmin: "⚠ | %1 users don't have admin role:\n%2",
      missingIdRemove: "⚠ | Please enter ID or tag user to remove admin role",
      listAdmin: "🤴🏽 | List of admins:\n%1",
      brokenCmds: "⚠ | List of commands not working:\n%1",
      noBrokenCmds: "✅ | No commands are not working"
    }
  },

  onStart: async function ({ message, args, usersData, event, getLang }) {
    switch (args[0]) {
      case "add":
      case "-a": {
        // ... (code for adding admin remains the same)
      }
      case "remove":
      case "-r": {
        // ... (code for removing admin remains the same)
      }
      case "list":
      case "-l": {
        // ... (code for listing admins remains the same)
      }
      case "broken":
      case "-b": {
        const brokenCmds = Object.keys(commands).filter(cmd => !commands[cmd].working);
        if (brokenCmds.length > 0) {
          return message.reply(getLang("brokenCmds", brokenCmds.join("\n")));
        } else {
          return message.reply(getLang("noBrokenCmds"));
        }
      }
      default:
        return message.SyntaxError();
    }
  }
};
