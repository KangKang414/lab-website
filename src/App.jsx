import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Camera, Mail, MapPin, Menu, Microscope, Users, FileText, Newspaper, Home, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import './App.css'


const site = {
  groupName: "北京邮电大学智能感知Lab",
  englishName: "Intelligent sensing",
  subtitle: "先进光学、微纳器件与智能光子设计",
  description:
    "本网站用于展示研究组简介、研究方向、论文成果、成员信息、新闻动态与联系方式。你可以直接替换下面的数据，并把照片路径填入 image 字段。",
  institution: "XX大学 / XX学院 / XX实验室",
  email: "pi@university.edu.cn",
  address: "XX市XX区XX大学XX楼",
  recruitment: "欢迎具有光学、物理、电子、材料、计算背景的同学联系",
};



const researchAreas = [
  {
    title: "微纳光学",
    category: "基础研究",
    desc: "围绕微环谐振器、光子晶体、超表面与片上集成器件展开设计、制备与测试。",
    tags: ["Microring", "Metasurface", "Nanophotonics"],
    image: "",
  },
  {
    title: "光学传感",
    category: "应用研究",
    desc: "面向生物检测、环境监测和化学分析，开发高灵敏度、低功耗、可集成的传感平台。",
    tags: ["Biosensing", "Lab-on-chip", "High-Q Sensor"],
    image: "",
  },
  {
    title: "集成光子学",
    category: "平台技术",
    desc: "研究片上光通信、信号处理与光电融合架构，推动器件到系统级联。",
    tags: ["Silicon Photonics", "PIC", "Optical Interconnect"],
    image: "",
  },
  {
    title: "AI for Photonics",
    category: "交叉研究",
    desc: "利用机器学习与逆向设计优化器件结构、提高设计效率并加速实验迭代。",
    tags: ["Inverse Design", "Deep Learning", "Optimization"],
    image: "",
  },
  {
    title: "超表面与平面光学",
    category: "基础研究",
    desc: "研究波前调控、偏振控制与高效平面器件设计，面向成像与显示等场景。",
    tags: ["Metasurface", "Flat Optics", "Polarization"],
    image: "",
  },
  {
    title: "生物光子学",
    category: "应用研究",
    desc: "围绕生物样本检测、无标记识别与微流控芯片系统开展交叉研究。",
    tags: ["Biophotonics", "Microfluidics", "Label-free"],
    image: "",
  },
];

const publications = [
  {
    title: "High-sensitivity optical sensing using integrated microcavity platforms",
    journal: "Optics Express",
    year: "2025",
    type: "Journal",
    authors: "Zhang, Li, Wang, et al.",
    link: "#",
  },
  {
    title: "Deep-learning-assisted inverse design for compact nanophotonic devices",
    journal: "Photonics Research",
    year: "2024",
    type: "Journal",
    authors: "Chen, Xu, Liu, et al.",
    link: "#",
  },
  {
    title: "Simultaneous multi-parameter sensing on a lab-on-chip photonic platform",
    journal: "Sensors",
    year: "2024",
    type: "Journal",
    authors: "Lin, Zhao, Sun, et al.",
    link: "#",
  },
  {
    title: "A compact integrated platform for multi-physics photonic sensing",
    journal: "Advanced Optical Materials",
    year: "2023",
    type: "Journal",
    authors: "Xu, He, Zhao, et al.",
    link: "#",
  },
  {
    title: "Inverse-designed low-loss photonic components for dense integration",
    journal: "Conference on Lasers and Electro-Optics",
    year: "2023",
    type: "Conference",
    authors: "Wang, Zhao, Liu, et al.",
    link: "#",
  },
  {
    title: "Machine-learning-guided nanophotonic optimization under fabrication constraints",
    journal: "ACS Photonics",
    year: "2022",
    type: "Journal",
    authors: "Li, Chen, Xu, et al.",
    link: "#",
  },
];

const members = [
  {
    name: "芦鹏飞",
    role: "教授/课题组负责人",
    group: "教师",
    intro: "研究方向：。",
    bio: "长期从事。",
    email: "zhang",
    interests: ["微纳光学", "光学传感", "集成光子学"],
    image: "",
    homepage: "#",
    selectedPublications: [
      "High-sensitivity optical sensing using integrated microcavity platforms",
      "A compact integrated platform for multi-physics photonic sensing",
    ],
  },
  {
    name: "关晓宁",
    role: "副教授",
    group: "教师",
    intro: "研究方向：",
    bio: "聚焦。",
    email: ".edu.cn",
    interests: ["硅光", "片上互连", "系统设计"],
    image: "",
    homepage: "#",
    selectedPublications: ["Inverse-designed low-loss photonic components for dense integration"],
  },
  {
    name: "王博士后",
    role: "博士后",
    group: "博士后",
    intro: "研究方向：AI 逆向设计与纳米光子器件优化。",
    bio: "围绕 AI 驱动的器件设计与工艺容差优化开展研究，可补充博士毕业院校、合作导师与近期代表作。",
    email: "wang-postdoc@university.edu.cn",
    interests: ["AI for Photonics", "逆向设计", "优化算法"],
    image: "",
    homepage: "#",
    selectedPublications: ["Machine-learning-guided nanophotonic optimization under fabrication constraints"],
  },
  {
    name: "李同学",
    role: "博士研究生",
    group: "博士生",
    intro: "研究方向：微环谐振器传感与片上系统集成。",
    bio: "可填写研究课题、年级、研究进展、竞赛/奖学金情况，以及对外合作项目。",
    email: "phd-li@university.edu.cn",
    interests: ["微环传感", "片上系统"],
    image: "",
    homepage: "#",
    selectedPublications: ["High-sensitivity optical sensing using integrated microcavity platforms"],
  },
  {
    name: "赵同学",
    role: "博士研究生",
    group: "博士生",
    intro: "研究方向：超表面器件与偏振控制。",
    bio: "可补充博士课题、核心贡献、国际会议报告与合作经历。",
    email: "phd-zhao@university.edu.cn",
    interests: ["超表面", "偏振控制", "平面光学"],
    image: "",
    homepage: "#",
    selectedPublications: ["Deep-learning-assisted inverse design for compact nanophotonic devices"],
  },
  {
    name: "王同学",
    role: "硕士研究生",
    group: "硕士生",
    intro: "研究方向：超表面设计与深度学习辅助优化。",
    bio: "可补充硕士课题、研究方向、论文投稿情况与项目参与经历。",
    email: "master-wang@university.edu.cn",
    interests: ["超表面", "深度学习", "优化设计"],
    image: "",
    homepage: "#",
    selectedPublications: ["Deep-learning-assisted inverse design for compact nanophotonic devices"],
  },
  {
    name: "陈同学",
    role: "硕士研究生",
    group: "硕士生",
    intro: "研究方向：生物光子检测与实验平台搭建。",
    bio: "可补充实验平台、样品制备、系统测试与合作课题的相关介绍。",
    email: "master-chen@university.edu.cn",
    interests: ["生物光子学", "实验平台", "微流控"],
    image: "",
    homepage: "#",
    selectedPublications: ["Simultaneous multi-parameter sensing on a lab-on-chip photonic platform"],
  },
  {
    name: "孙同学",
    role: "科研助理",
    group: "科研助理",
    intro: "研究方向：实验平台维护、数据整理与样品测试。",
    bio: "可补充平台管理、设备维护、样品表征及协助课题推进等内容。",
    email: "assistant-sun@university.edu.cn",
    interests: ["平台维护", "样品测试", "数据整理"],
    image: "",
    homepage: "#",
    selectedPublications: [],
  },
];

const news = [
  {
    date: "2026-03",
    title: "课题组论文被《Optics Letters》接收",
    summary: "可在这里简要描述成果内容、作者、研究意义以及相关链接。",
    image: "",
  },
  {
    date: "2026-02",
    title: "新型片上传感芯片完成流片并进入测试阶段",
    summary: "可用于展示项目进展、实验进度和合作动态。",
    image: "",
  },
  {
    date: "2025-12",
    title: "与合作团队共同申请的国家项目获批",
    summary: "可用于展示科研项目、奖励和团队里程碑。",
    image: "",
  },
];

const pages = [
  { key: "home", label: "首页", icon: Home },
  { key: "research", label: "研究方向", icon: Microscope },
  { key: "publications", label: "论文成果", icon: FileText },
  { key: "members", label: "团队成员", icon: Users },
  { key: "news", label: "新闻动态", icon: Newspaper },
  { key: "contact", label: "联系我们", icon: Mail },
];

function PhotoPlaceholder({ title = "预留照片位置", hint = "将图片路径填入对应 image 字段" , className = "h-56" }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-slate-100 ${className}`}>
      <div className="flex h-full flex-col items-center justify-center px-6 text-center text-slate-500">
        <Camera className="mb-3 h-8 w-8" />
        <div className="text-sm font-medium text-slate-700">{title}</div>
        <div className="mt-2 text-xs leading-6">{hint}</div>
      </div>
    </div>
  );
}

function SmartImage({ src, title, hint, className = "h-56" }) {
  if (!src) {
    return <PhotoPlaceholder title={title} hint={hint} className={className} />;
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-slate-200 bg-white ${className}`}>
      <img src={src} alt={title} className="h-full w-full object-cover" />
    </div>
  );
}

function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/55 p-4" onClick={onClose}>
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[28px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition hover:text-slate-900"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
}

function PageContainer({ eyebrow, title, description, children }) {
  return (
    <main className="mx-auto max-w-none px-10 py-16">
      <div className="mb-10">
        <div className="text-sm font-medium text-slate-500">{eyebrow}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        {description ? <p className="mt-4 text-base leading-8 text-slate-600">{description}</p> : null}
      </div>
      {children}
    </main>
  );
}

function Header({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);

  const go = (key) => {
    setCurrentPage(key);
    setOpen(false);
    window.location.hash = key;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-none items-center justify-between px-10 py-4">
        <button className="text-left" onClick={() => go("home")}>
          <div className="text-[50px] font-semibold ">{site.groupName}</div>
          <div className="text-[30px] text-slate-500">{site.englishName}</div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {pages.map((page) => {
            const Icon = page.icon;
            const active = currentPage === page.key;
            return (
              <button
                key={page.key}
                onClick={() => go(page.key)}
                className={`inline-flex items-center gap-2 rounded-2xl px-[1.4rem] py-5 text-[18px] transition ${
                  active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon className="h-4 w-4" />
                {page.label}
              </button>
            );
          })}
        </nav>

        <button
          className="inline-flex rounded-2xl border border-slate-200 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="grid gap-2">
            {pages.map((page) => {
              const Icon = page.icon;
              const active = currentPage === page.key;
              return (
                <button
                  key={page.key}
                  onClick={() => go(page.key)}
                  className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm ${
                    active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {page.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}

// // function HomePage({ setCurrentPage }) {
//   return (
//     <>
//       <section className="py-28">
//         <div className="mx-auto grid max-w-[1700px] gap-20 px-10 md:grid-cols-2">
//           <div className="flex flex-col justify-center">
//             <div className="mb-4 inline-flex w-fit rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
//               Academic Research Group Website
//             </div>
//             <h1 className="text-5xl font-semibold tracking-tight">
//               {site.groupName}
//               <span className="mt-3 block text-2xl font-medium text-slate-500 md:text-4xl">{site.subtitle}</span>
//             </h1>
//             <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">{site.description}</p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <button
//                 onClick={() => {
//                   setCurrentPage("research");
//                   window.location.hash = "research";
//                 }}
//                 className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
//               >
//                 查看研究方向
//                 <ArrowRight className="h-4 w-4" />
//               </button>
//               <button
//                 onClick={() => {
//                   setCurrentPage("contact");
//                   window.location.hash = "contact";
//                 }}
//                 className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5"
//               >
//                 联系我们
//               </button>
//             </div>
//           </div>

//           <div className="grid gap-4 md:grid-cols-2">
//             <SmartImage
//               src={heroImages[0].image}
//               title={heroImages[0].title}
//               hint={heroImages[0].hint}
//               className="h-[420px]"
//             />
//             <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//               <div className="text-sm text-slate-500">研究方向</div>
//               <div className="mt-2 text-3xl font-semibold">{researchAreas.length}+</div>
//               <p className="mt-3 text-sm leading-6 text-slate-600">覆盖微纳光学、传感、集成光子学与 AI 辅助设计。</p>
//             </div>
//             <SmartImage
//               src={heroImages[1].image}
//               title={heroImages[1].title}
//               hint={heroImages[1].hint}
//               className="h-56"
//             />
//           </div>
//         </div>
//       </section>

//       <PageContainer
//         eyebrow="Overview"
//         title="研究组概览"
//         description="多页面版本通常包含首页、研究方向、论文成果、团队成员、新闻动态与联系我们。这里已预留照片位置，你可以逐步替换为真实图片。"
//       >
//         <div className="grid gap-6 md:grid-cols-3">
//           <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//             <div className="text-sm text-slate-500">所属单位</div>
//             <div className="mt-3 text-lg font-semibold">{site.institution}</div>
//           </div>
//           <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//             <div className="text-sm text-slate-500">论文成果</div>
//             <div className="mt-3 text-lg font-semibold">近年可展示 {publications.length}+ 篇代表作</div>
//           </div>
//           <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
//             <div className="text-sm text-slate-500">招生与合作</div>
//             <div className="mt-3 text-lg font-semibold">支持招生宣传、合作展示与项目汇报</div>
//           </div>
//         </div>
//       </PageContainer>
//     </>
//   );
// // }

function HomePage() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-none grid-cols-1 items-center gap-16 px-8 md:grid-cols-2">

        {/* 左边：实验室合照 */}
        <div>
          <img
            src="./images/lab.jpg"
            alt="Lab group photo"
            className="w-full rounded-xl object-cover shadow-sm"
          />
        </div>

        {/* 右边：实验室介绍 */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-tight">
            智能感知lab
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            一段简单的介绍
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            还是简单的介绍.
          </p>
        </div>

      </div>
    </section>
  );
}

function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const categories = ["全部", ...Array.from(new Set(researchAreas.map((item) => item.category)))];
  const filteredAreas = activeCategory === "全部"
    ? researchAreas
    : researchAreas.filter((item) => item.category === activeCategory);

  return (
    <PageContainer
      eyebrow="Research"
      title="研究方向"
      description="研究方向数量较多时，可以按类别分组展示。现在已加入分类筛选，后续继续增加条目时不需要改页面结构。"
    >
      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeCategory === category ? "bg-slate-900 text-white" : "bg-white text-slate-600 border border-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredAreas.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <SmartImage
              src={item.image}
              title={`${item.title} 配图位置`}
              hint="建议放研究示意图、器件图、实验照片或结果图"
              className="h-64 rounded-none border-0"
            />
            <div className="p-6">
              <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{item.category}</div>
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}

function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState("全部");
  const [selectedType, setSelectedType] = useState("全部");
  const [keyword, setKeyword] = useState("");
  const [expandedYears, setExpandedYears] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const pageSize = 4;
  const years = ["全部", ...Array.from(new Set(publications.map((paper) => paper.year))).sort((a, b) => Number(b) - Number(a))];
  const types = ["全部", ...Array.from(new Set(publications.map((paper) => paper.type)))];

  const filteredPublications = publications.filter((paper) => {
    const matchYear = selectedYear === "全部" || paper.year === selectedYear;
    const matchType = selectedType === "全部" || paper.type === selectedType;
    const text = `${paper.title} ${paper.authors} ${paper.journal}`.toLowerCase();
    const matchKeyword = !keyword || text.includes(keyword.toLowerCase());
    return matchYear && matchType && matchKeyword;
  });

  useEffect(() => {
    setCurrentPageIndex(1);
  }, [selectedYear, selectedType, keyword]);

  const groupedByYear = years
    .filter((year) => year !== "全部")
    .map((year) => ({ year, items: filteredPublications.filter((paper) => paper.year === year) }))
    .filter((group) => group.items.length > 0);

  const totalPages = Math.max(1, Math.ceil(filteredPublications.length / pageSize));
  const paginatedPublications = filteredPublications.slice((currentPageIndex - 1) * pageSize, currentPageIndex * pageSize);

  const toggleYear = (year) => {
    setExpandedYears((prev) => (prev.includes(year) ? prev.filter((item) => item !== year) : [...prev, year]));
  };

  return (
    <PageContainer
      eyebrow="Publications"
      title="论文成果"
      description="已补上两种适合大课题组维护的展示方式：顶部列表分页，以及按年份折叠展开。论文数量继续增长时也能保持清晰。"
    >
      <div className="mb-6 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none">
          {years.map((year) => <option key={year} value={year}>{year === "全部" ? "全部年份" : year}</option>)}
        </select>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none">
          {types.map((type) => <option key={type} value={type}>{type === "全部" ? "全部类型" : type}</option>)}
        </select>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="搜索标题 / 作者 / 期刊"
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
        />
      </div>

      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm text-slate-500">分页视图：共 {filteredPublications.length} 条结果</div>
        <div className="text-sm text-slate-400">第 {currentPageIndex} / {totalPages} 页</div>
      </div>
      <div className="grid gap-4">
        {paginatedPublications.map((paper, idx) => (
          <a key={`${paper.title}-${idx}`} href={paper.link} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>#{String((currentPageIndex - 1) * pageSize + idx + 1).padStart(2, "0")}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{paper.type}</span>
              <span>{paper.year}</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold leading-8">{paper.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{paper.authors}</p>
            <p className="mt-1 text-sm text-slate-500">{paper.journal}</p>
          </a>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={() => setCurrentPageIndex((prev) => Math.max(1, prev - 1))}
          disabled={currentPageIndex === 1}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          上一页
        </button>
        <button
          onClick={() => setCurrentPageIndex((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPageIndex === totalPages}
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
        >
          下一页
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-14">
        <div className="mb-4 text-sm font-medium text-slate-500">按年份折叠视图</div>
        <div className="grid gap-4">
          {groupedByYear.map((group) => {
            const open = expandedYears.includes(group.year);
            return (
              <div key={group.year} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <button
                  onClick={() => toggleYear(group.year)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <div>
                    <div className="text-xl font-semibold">{group.year}</div>
                    <div className="mt-1 text-sm text-slate-500">{group.items.length} 篇成果</div>
                  </div>
                  <div className="text-sm text-slate-500">{open ? "收起" : "展开"}</div>
                </button>
                {open ? (
                  <div className="border-t border-slate-200 px-6 py-4">
                    <div className="grid gap-4">
                      {group.items.map((paper) => (
                        <a key={paper.title} href={paper.link} className="rounded-2xl border border-slate-200 p-5 transition hover:bg-slate-50">
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                            <span className="rounded-full bg-slate-100 px-2 py-1">{paper.type}</span>
                            <span>{paper.journal}</span>
                          </div>
                          <div className="mt-2 text-lg font-semibold leading-7">{paper.title}</div>
                          <div className="mt-2 text-sm text-slate-600">{paper.authors}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}

function MembersPage() {
  const [activeGroup, setActiveGroup] = useState("全部");
  const [selectedMember, setSelectedMember] = useState(null);
  const groups = ["全部", ...Array.from(new Set(members.map((member) => member.group)))];
  const filteredMembers = activeGroup === "全部"
    ? members
    : members.filter((member) => member.group === activeGroup);

  return (
    <>
      <PageContainer
        eyebrow="Members"
        title="团队成员"
        description="已补上成员详情弹窗，适合老师、博士后和研究生信息较多的场景。点开成员卡片即可查看更完整介绍。"
      >
        <div className="mb-6 flex flex-wrap gap-3">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeGroup === group ? "bg-slate-900 text-white" : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <SmartImage
                src={member.image}
                title={`${member.name} 头像位置`}
                hint="建议使用 1:1 或 4:5 人像照片"
                className="h-72 rounded-none border-0"
              />
              <div className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{member.group}</div>
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <div className="mt-1 text-sm text-slate-500">{member.role}</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{member.intro}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="inline-flex text-sm font-medium text-slate-900"
                  >
                    查看详情
                  </button>
                  <a href={member.homepage} className="inline-flex items-center gap-1 text-sm font-medium text-slate-500">
                    个人主页
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>

      <Modal open={!!selectedMember} onClose={() => setSelectedMember(null)}>
        {selectedMember ? (
          <div className="grid gap-0 md:grid-cols-[320px_1fr]">
            <SmartImage
              src={selectedMember.image}
              title={`${selectedMember.name} 头像位置`}
              hint="建议放成员正式照片"
              className="h-80 rounded-none border-0 md:h-full"
            />
            <div className="p-8 md:p-10">
              <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{selectedMember.group}</div>
              <h2 className="text-3xl font-semibold">{selectedMember.name}</h2>
              <div className="mt-2 text-base text-slate-500">{selectedMember.role}</div>
              <p className="mt-6 text-sm leading-8 text-slate-600">{selectedMember.bio}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm text-slate-400">邮箱</div>
                  <div className="mt-2 text-sm text-slate-700">{selectedMember.email}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="text-sm text-slate-400">研究兴趣</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedMember.interests.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{item}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-sm font-medium text-slate-500">代表成果</div>
                <div className="mt-3 grid gap-3">
                  {selectedMember.selectedPublications.length ? selectedMember.selectedPublications.map((paper) => (
                    <div key={paper} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">{paper}</div>
                  )) : <div className="rounded-2xl border border-dashed border-slate-200 px-4 py-3 text-sm text-slate-400">可在此添加该成员的代表论文、项目或奖励</div>}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}

function NewsPage() {
  return (
    <PageContainer
      eyebrow="News"
      title="新闻动态"
      description="适合放课题组新闻、论文录用、项目进展、获奖信息和学术活动。每条新闻也预留了图片位置。"
    >
      <div className="grid gap-6">
        {news.map((item) => (
          <article key={`${item.date}-${item.title}`} className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:grid-cols-[320px_1fr]">
            <SmartImage
              src={item.image}
              title={`${item.title} 配图位置`}
              hint="建议放会议照片、论文截图、实验现场或海报图片"
              className="h-64 rounded-none border-0 md:h-full"
            />
            <div className="p-6 md:p-8">
              <div className="text-sm text-slate-400">{item.date}</div>
              <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}

function ContactPage() {
  return (
    <PageContainer
      eyebrow="Contact"
      title="联系我们"
      description="建议保留邮箱、地址、招生说明，并预留一张实验室环境或楼宇照片，增强可信度与辨识度。"
    >
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm md:p-10">
          <div className="grid gap-4 text-sm leading-7 text-slate-200">
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Mail className="mt-1 h-4 w-4 shrink-0" />
              <div>邮箱：{site.email}</div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <MapPin className="mt-1 h-4 w-4 shrink-0" />
              <div>地址：{site.address}</div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Users className="mt-1 h-4 w-4 shrink-0" />
              <div>招生：{site.recruitment}</div>
            </div>
          </div>
        </div>

        <SmartImage
          src=""
          title="联系页面照片位置"
          hint="建议放实验室门牌、校园楼宇、实验室环境照"
          className="h-full min-h-[320px]"
        />
      </div>
    </PageContainer>
  );
}

export default function ResearchGroupWebsite() {
  const initialPage = useMemo(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
    return pages.some((page) => page.key === hash) ? hash : "home";
  }, []);

  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (pages.some((page) => page.key === hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "research":
        return <ResearchPage />;
      case "publications":
        return <PublicationsPage />;
      case "members":
        return <MembersPage />;
      case "news":
        return <NewsPage />;
      case "contact":
        return <ContactPage />;
      case "home":
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-none flex-col gap-2 px-10 py-8">
          <div>© 2026 {site.groupName}. All rights reserved.</div>
          <div>Multi-page academic website starter with reserved photo slots.</div>
        </div>
      </footer>
    </div>
  );
}

