function answerQuestion() {
  const question = document.getElementById("questionInput").value;
  const answerBox = document.getElementById("answerBox");

  if (question.trim() === "") {
    answerBox.innerText = "请先输入你的问题。";
    return;
  }

  let answer = "";

  if (question.includes("校园卡") || question.includes("饭卡") || question.includes("一卡通")) {
    answer = "如果校园卡丢失，建议先在微信小程序“杭电后勤生活”中的智慧服务里进行预约补卡，或者直接前往学校指定服务点补办。平时也要注意保护校园卡余额和个人信息。";

  } else if (question.includes("图书馆") || question.includes("自习") || question.includes("借书")) {
    answer = "图书馆开放时间请以学校官方通知为准。去图书馆前可以在“杭电图书馆”小程序上进行预约。进入图书馆后要保持安静，不占座，离开时带走个人物品。";

  } else if (question.includes("宿舍") || question.includes("寝室")) {
    answer = "在宿舍中遇到问题，可以先联系宿管阿姨，也可以在学校微信小程序“杭电后勤生活”里提交维修申请。平时要注意寝室卫生、用电安全和作息协调。";

  } else if (question.includes("食堂") || question.includes("吃饭") || question.includes("餐厅")) {
    answer = "学校食堂一般位于学生生活区，可以根据自己所在宿舍位置选择就近食堂就餐。建议错峰用餐，节约粮食，注意饮食均衡。";

  } else if (question.includes("快递") || question.includes("取件") || question.includes("包裹")) {
    answer = "学校快递站在生活区北门外的菜鸟驿站，附近也有顺丰快递站和京东快递站，可以根据自己的快递信息前往对应站点取件。取件时注意核对取件码和收件人信息。";

  } else if (question.includes("请假") || question.includes("病假") || question.includes("事假")) {
    answer = "如果需要请假，建议先在钉钉上向辅导员提交请假申请和相关证明，并按照学院要求完成请假流程。请假期间也要及时关注课程安排和作业通知。";

  } else if (question.includes("社团") || question.includes("学生组织") || question.includes("部门")) {
    answer = "学校各类社团和学生组织都会进行招新，同学们可以根据自己的兴趣积极参与。但也要注意合理安排时间，不要因为参加过多活动影响学习。";

  } else if (question.includes("考试") || question.includes("复习") || question.includes("期末")) {
    answer = "考试时间和地点一般会在钉钉或相关通知中提前发布。同学们可以提前查看考试安排，整理课堂笔记，完成练习题，并进行有针对性的复习。";

  } else if (question.includes("选课") || question.includes("抢课")) {
    answer = "选课时应关注课程时间、任课教师、学分要求以及个人兴趣。遇到系统卡顿、课程冲突或选课失败，可以咨询教务处或学院老师。";

  } else if (question.includes("转专业")) {
    answer = "转专业通常需要满足学校和学院的相关条件，例如成绩排名、课程要求或考核要求等。具体政策请以学校教务处和学院最新通知为准。";

  } else if (question.includes("奖学金") || question.includes("评奖") || question.includes("综测")) {
    answer = "奖学金一般与学习成绩、综合测评、竞赛获奖、志愿服务和日常表现有关。建议平时认真学习，积极参加活动，并及时关注学院通知。";

  } else if (question.includes("保研") || question.includes("推免")) {
    answer = "保研通常与成绩排名、科研竞赛、英语能力和综合表现有关。建议尽早了解学院政策，保持较好的绩点，并积极参与科研训练或学科竞赛。";

  } else if (question.includes("心理") || question.includes("焦虑") || question.includes("压力") || question.includes("难受")) {
    answer = "如果感到焦虑或压力较大，可以适当运动、规律作息，也可以和朋友交流。如果情绪持续影响学习和生活，建议及时联系辅导员或学校心理咨询中心进行心理疏导。";

  } else if (question.includes("校园网") || question.includes("网络") || question.includes("网速") || question.includes("VPN")) {
    answer = "如果校园网较慢，可以先检查 WiFi 连接、账号登录状态和设备网络设置。使用 VPN 时可能会增加延迟，建议根据实际需要选择稳定节点。";

  } else if (question.includes("报修") || question.includes("维修") || question.includes("灯坏") || question.includes("空调坏")) {
    answer = "宿舍设备损坏时，可以联系宿管阿姨，也可以在“杭电后勤生活”里进行报修。描述问题时最好写清楚楼号、寝室号、故障类型和具体情况。";

  } else if (question.includes("军训")) {
    answer = "军训期间建议准备水杯、防晒用品、纸巾和舒适的鞋垫。训练时注意补水，身体不适要及时向教官或辅导员说明。";

  } else if (question.includes("新生") || question.includes("入学") || question.includes("开学")) {
    answer = "新生入学时建议提前准备证件、录取通知书、生活用品和学习用品。刚开始不熟悉校园很正常，可以多向学长学姐、辅导员和同学请教。";

  } else if (question.includes("辅导员")) {
    answer = "遇到请假、心理压力、奖助学金、班级事务等问题，可以及时联系辅导员。和辅导员沟通时，建议说明具体情况和自己的需求。";

  } else if (question.includes("保安") || question.includes("门禁") || question.includes("进校")) {
    answer = "进出校门或宿舍楼时应遵守学校门禁管理规定。遇到证件、通行或安全问题，可以向保安叔叔或相关管理人员咨询。";

  } else if (question.includes("宿管") || question.includes("宿管阿姨")) {
    answer = "宿管阿姨主要负责宿舍楼日常管理和安全提醒。遇到宿舍设备损坏、门禁、卫生或生活问题，可以礼貌地向宿管阿姨求助。";

  } else if (question.includes("失物") || question.includes("丢东西") || question.includes("找东西")) {
    answer = "如果在校园里丢失物品，可以先回忆最后使用地点，再联系附近教室、食堂、图书馆或宿管处。也可以在班级群或学校相关平台发布失物信息。";

  } else if (question.includes("打印") || question.includes("复印")) {
    answer = "打印或复印资料时，可以选择学校周边打印店或校园内相关服务点。打印前建议检查文件格式、页数和排版，避免浪费纸张。";

  } else if (question.includes("水电费") || question.includes("电费") || question.includes("水费")) {
    answer = "宿舍水电费一般可以通过学校指定平台或宿舍管理渠道查询和缴纳。具体方式请以学校通知或宿管处说明为准。";

  } else if (question.includes("空调")) {
    answer = "如果宿舍空调无法正常使用，可以先检查遥控器、电源和使用时间规定。如果仍有问题，可以联系宿管或通过报修渠道申请维修。";

  } else if (question.includes("洗衣机") || question.includes("洗衣")) {
    answer = "使用公共洗衣机时，建议提前查看是否空闲，注意及时取走衣物，不要长时间占用。遇到机器故障，可以联系宿舍楼相关管理人员处理。";

  } else if (question.includes("作业") || question.includes("课程作业")) {
    answer = "完成课程作业时建议先理解要求，再合理使用 AI 辅助查资料、列提纲或检查表达。不要直接复制 AI 生成内容，应加入自己的思考和修改。";

  } else if (question.includes("AI") || question.includes("DeepSeek") || question.includes("人工智能")) {
    answer = "AI 工具可以帮助我们提高学习和创作效率，但使用时要注意学术诚信、隐私保护和结果核查。AI 适合作为学习助手，而不是代替自己完成作业的工具。";

  } else if (question.includes("代码") || question.includes("编程") || question.includes("程序")) {
    answer = "学习编程时可以用 AI 帮助解释报错、分析代码逻辑和提供思路，但一定要自己理解代码含义，并通过运行和调试来掌握知识。";

  } else if (question.includes("高数") || question.includes("数学")) {
    answer = "学习高数时建议重视概念理解和例题训练。可以用 AI 辅助讲解步骤，但计算过程和解题思路最好自己完整练习一遍。";

  } else if (question.includes("英语") || question.includes("四六级") || question.includes("四级") || question.includes("六级")) {
    answer = "英语学习建议每天背单词、练习听力和阅读，有问题可以找任课老师进行询问。也可以用 AI 辅助修改作文和解释语法，但不能完全依赖 AI 生成答案。";

  } else if (question.includes("竞赛") || question.includes("比赛")) {
    answer = "参加竞赛可以提升自己的动手实践能力和团队协作能力。建议根据专业方向选择合适比赛，如 ACM、数学建模、创新创业等，并提前做好组队准备。";

  } else if (question.includes("兼职") || question.includes("打工")) {
    answer = "大学生可以适当参加兼职，但要注意安全和时间安排。不要轻信高薪兼职、刷单兼职等信息，避免被诈骗。";

  } else if (question.includes("诈骗") || question.includes("被骗")) {
    answer = "遇到疑似诈骗的情况，不要随意转账或透露验证码、身份证号、银行卡信息。可以及时联系辅导员、保卫处或报警处理。";

  } else if (question.includes("医保") || question.includes("医院") || question.includes("看病")) {
    answer = "身体不舒服时应及时就医，不要硬扛。关于医保报销、校医院或就医流程，可以咨询辅导员或学校相关部门。";

  } else if (question.includes("运动") || question.includes("体育") || question.includes("跑步")) {
    answer = "运动有助于缓解压力和增强体质。可以选择跑步、篮球、羽毛球等运动，但要注意热身和安全。";

  } else if (question.includes("寝室矛盾") || question.includes("室友") || question.includes("吵架")) {
    answer = "遇到寝室矛盾时，建议先冷静沟通，明确彼此的作息和卫生习惯。如果问题难以解决，可以请班委、辅导员或宿管进行协调。";

  } else if (question.includes("安全") || question.includes("用电")) {
    answer = "宿舍用电要遵守学校规定，不使用违规电器，不私拉乱接电线。离开宿舍前注意关闭电源，保护自己和他人的安全。";

  } else if (question.includes("地图") || question.includes("路线") || question.includes("怎么去")) {
    answer = "如果不熟悉校园路线，可以查看学校官方地图、导航软件，或询问同学、保安和志愿者。新生刚开始迷路很正常，多走几次就熟悉了。";

  } else if (question.includes("成绩") || question.includes("绩点") || question.includes("GPA")) {
    answer = "成绩和绩点可以通过学校教务系统查询。想提高绩点，建议平时认真听课，完成课后作业，不要只依赖考前突击。";

  } else if (question.includes("毕业") || question.includes("就业") || question.includes("实习")) {
    answer = "就业和实习需要提前准备简历、项目经历和面试能力。软件工程专业学生可以多积累代码项目、竞赛经历和实习经验。";

  } else {
    answer = "暂未匹配到具体答案。建议咨询辅导员、宿管阿姨、任课老师，或在学校官方平台获取更准确的信息。";
  }

  answerBox.innerText = answer;
}

function generateRepair() {
  const building = document.getElementById("buildingInput").value;
  const room = document.getElementById("roomInput").value;
  const type = document.getElementById("repairType").value;
  const repairBox = document.getElementById("repairBox");

  if (building.trim() === "" || room.trim() === "") {
    repairBox.innerText = "请填写宿舍楼号和寝室号。";
    return;
  }

  repairBox.innerText =
    `宿管阿姨您好，我是${building}${room}寝室的学生。我们寝室目前出现“${type}”的问题，影响正常生活，希望能帮忙安排维修，谢谢！`;
}

function courseAdvice() {
  const course = document.getElementById("courseInput").value;
  const courseBox = document.getElementById("courseBox");

  if (course.trim() === "") {
    courseBox.innerText = "请先输入课程名称。";
    return;
  }

  if (course.includes("程序") || course.includes("编程") || course.includes("代码") || course.includes("软件") || course.includes("程序设计")) {
    courseBox.innerText = "程序设计类课程建议先理解基础语法，再通过小项目练习。遇到报错时，可以先自己分析，再使用 AI 辅助定位问题，但一定要自己理解代码逻辑。";

  } else if (course.includes("高数") || course.includes("数学") || course.includes("线代") || course.includes("概率")) {
    courseBox.innerText = "数学类课程建议重视概念理解和例题训练，整理常见题型。可以用 AI 辅助解释思路，但计算过程要自己完成。";

  } else if (course.includes("英语") || course.includes("四级") || course.includes("六级")) {
    courseBox.innerText = "英语学习建议每天积累单词和常用表达，坚持听力与阅读训练。可以用 AI 辅助修改作文，但不要完全依赖 AI 生成。";

  } else if (course.includes("体育")) {
    courseBox.innerText = "体育课要注意出勤和课堂表现，运动前做好热身，平时也可以适当锻炼，提高身体素质。";

  } else if (course.includes("思政") || course.includes("马克思") || course.includes("形势")) {
    courseBox.innerText = "思政类课程建议结合现实案例理解理论，平时关注课堂重点，写报告时要加入自己的真实观点和思考。";
  
  } else if (course.includes("大物") || course.includes("物理") ) {
    courseBox.innerText = "物理类学科要在课堂上认真听讲，课后积极巩固课上知识，多刷题，依靠自己独立完成。";
  
  } else {
    courseBox.innerText = "建议你制定学习计划，课后及时复习，并合理使用 AI 工具辅助理解知识点。";
  }
}