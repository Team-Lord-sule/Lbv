const { config } = global.GoatBot;
const { writeFileSync } = require("fs-extra");
const { commands, aliases } = global.GoatBot;

module.exports = {
  config: {
    name: "admin2",
    version: "1.7",
    author: "NTKhang", // original author 𝗟𝗢𝗥𝗗 𝗝𝗔𝗬𝗗𝗘𝗡 𝗦𝗠𝗜𝗧𝗛
    countDown: 5,
    role: 2,
    description: {
      vi: "Thêm, xóa, sửa quyền admin hoặc xem danh sách lệnh không hoạt động",
      en: "Add, remove, edit admin role or view list of commands not working"
    },
    category: "box chat",
    guide: {
      vi: ' {𝗽𝗻} [𝗮𝗱𝗱 | -𝗮] <𝘂𝗶𝗱 | @𝘁𝗮𝗴>: 𝗧𝗵ê𝗺 𝗾𝘂𝘆ề𝗻 𝗮𝗱𝗺𝗶𝗻 𝗰𝗵𝗼 𝗻𝗴ườ𝗶 𝗱ù𝗻𝗴' + '\𝗻 {𝗽𝗻} [𝗿𝗲𝗺𝗼𝘃𝗲 | -𝗿] <𝘂𝗶𝗱 | @𝘁𝗮𝗴>: 𝗫ó𝗮 𝗾𝘂𝘆ề𝗻 𝗮𝗱𝗺𝗶𝗻 𝗰ủ𝗮 𝗻𝗴ườ𝗶 𝗱ù𝗻𝗴' + '\𝗻 {𝗽𝗻} [𝗹𝗶𝘀𝘁 | -𝗹]: 𝗟𝗶ệ𝘁 𝗸ê 𝗱𝗮𝗻𝗵 𝘀á𝗰𝗵 𝗮𝗱𝗺𝗶𝗻' + '\𝗻 {𝗽𝗻} [𝗯𝗿𝗼𝗸𝗲𝗻 | -𝗯]: 𝗫𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀á𝗰𝗵 𝗹ệ𝗻𝗵 𝗸𝗵ô𝗻𝗴 𝗵𝗼ạ𝘁 độ𝗻𝗴', 
en: ' {𝗽𝗻} [𝗮𝗱𝗱 | -𝗮] <𝘂𝗶𝗱 | @𝘁𝗮𝗴>: 𝗔𝗱𝗱 𝗮𝗱𝗺𝗶𝗻 𝗿𝗼𝗹𝗲 𝗳𝗼𝗿 𝘂𝘀𝗲𝗿' + '\𝗻 {𝗽𝗻} [𝗿𝗲𝗺𝗼𝘃𝗲 | -𝗿] <𝘂𝗶𝗱 | @𝘁𝗮𝗴>: 𝗥𝗲𝗺𝗼𝘃𝗲 𝗮𝗱𝗺𝗶𝗻 𝗿𝗼𝗹𝗲 𝗼𝗳 𝘂𝘀𝗲𝗿' + '\𝗻 {𝗽𝗻} [𝗹𝗶𝘀𝘁 | -𝗹]: 𝗟𝗶𝘀𝘁 𝗮𝗹𝗹 𝗮𝗱𝗺𝗶𝗻𝘀' + '\𝗻 {𝗽𝗻} [𝗯𝗿𝗼𝗸𝗲𝗻 | -𝗯]: 𝗩𝗶𝗲𝘄 𝗹𝗶𝘀𝘁 𝗼𝗳 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗻𝗼𝘁 𝘄𝗼𝗿𝗸𝗶𝗻𝗴'
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
      added: "✅🍦| 𝗝𝗔𝗬𝗗𝗘𝗡 𝗦𝗠𝗜𝗧𝗛 𝗔𝗱𝗱𝗲𝗱 𝗮𝗱𝗺𝗶𝗻 𝗿𝗼𝗹𝗲 𝗳𝗼𝗿 %𝟭 𝘂𝘀𝗲𝗿𝘀:\n%2",
 alreadyAdmin: "\𝗻⚠ | %1 𝘂𝘀𝗲𝗿𝘀 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗵𝗮𝘃𝗲 𝗮𝗱𝗺𝗶𝗻 𝗿𝗼𝗹𝗲:\n%2",
 missingIdAdd: "⚠ | 𝗣𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝘁𝗲𝗿 𝗜𝗗 𝗼𝗿 𝘁𝗮𝗴 𝘂𝘀𝗲𝗿 𝘁𝗼 𝗮𝗱𝗱 𝗮𝗱𝗺𝗶𝗻 𝗿𝗼𝗹𝗲", 
removed: "✅🍦| 𝗝𝗔𝗬𝗗𝗘𝗡 𝗦𝗠𝗜𝗧𝗛 𝗥𝗲𝗺𝗼𝘃𝗲𝗱 𝗮𝗱𝗺𝗶𝗻 𝗿𝗼𝗹𝗲 𝗳𝗼𝗿 %1 𝘂𝘀𝗲𝗿𝘀:\n%2",
 notAdmin: "⚠ | %1 𝘂𝘀𝗲𝗿𝘀 𝗱𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗮𝗱𝗺𝗶𝗻 𝗿𝗼𝗹𝗲:\n%2",
 missingIdRemove: "⚠ | 𝗣𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝘁𝗲𝗿 𝗜𝗗 𝗼𝗿 𝘁𝗮𝗴 𝘂𝘀𝗲𝗿 𝘁𝗼 𝗿𝗲𝗺𝗼𝘃𝗲 𝗮𝗱𝗺𝗶𝗻 𝗿𝗼𝗹𝗲",
 listAdmin: "🤴🏽🍦| 𝗟𝗢𝗥𝗗 𝗝𝗔𝗬𝗗𝗘𝗡 𝗦𝗠𝗜𝗧𝗛 𝗔𝗗𝗠𝗜𝗡'𝗦:\n%1",
 brokenCmds: "⚠ | 𝗝𝗔𝗬𝗗𝗘𝗡 𝗦𝗠𝗜𝗧𝗛 𝗟𝗶𝘀𝘁 𝗼𝗳 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗻𝗼𝘁 𝘄𝗼𝗿𝗸𝗶𝗻𝗴:\n%1",
 noBrokenCmds: "✅🍦| 𝗝𝗔𝗬𝗗𝗘𝗡 𝗦𝗠𝗜𝗧𝗛 𝘀𝗮𝘆𝘀 𝗡𝗼 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗮𝗿𝗲 𝗻𝗼𝘁 𝘄𝗼𝗿𝗸𝗶𝗻𝗴"
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
