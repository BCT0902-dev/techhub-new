import React, { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Github, Linkedin, Twitter, Mail, Star, Download, ExternalLink, Clock, User, Tag } from 'lucide-react'
import './App.css'

// Import images
import bannerImg from './assets/banner.jpg'
import newsImg from './assets/news_tech.jpg'
import softwareImg from './assets/software_dev.png'
import tipsImg from './assets/tech_tips.png'
import avatarImg from './assets/avatar.jpg'

const Button = ({ children, variant = 'default', size = 'default', className = '', onClick, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
  }
  
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10'
  }
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground'
  }
  
  return (
    <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}

const Card = ({ children, className = '' }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  )
}

const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
}

function App() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">TechHub</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Trang Chủ
              </button>
              <button onClick={() => scrollToSection('news')} className="text-sm font-medium hover:text-primary transition-colors">
                Tin Tức
              </button>
              <button onClick={() => scrollToSection('software')} className="text-sm font-medium hover:text-primary transition-colors">
                Phần Mềm
              </button>
              <button onClick={() => scrollToSection('tips')} className="text-sm font-medium hover:text-primary transition-colors">
                Thủ Thuật
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                Giới Thiệu
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                Trang Chủ
              </button>
              <button onClick={() => scrollToSection('news')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                Tin Tức
              </button>
              <button onClick={() => scrollToSection('software')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                Phần Mềm
              </button>
              <button onClick={() => scrollToSection('tips')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                Thủ Thuật
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-sm font-medium hover:text-primary transition-colors">
                Giới Thiệu
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={bannerImg} 
            alt="Technology Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Khám Phá Thế Giới Công Nghệ
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Nơi cập nhật những tin tức công nghệ mới nhất, chia sẻ phần mềm hữu ích và những thủ thuật công nghệ thực tế
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('news')}>
              Khám Phá Ngay
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('about')}>
              Tìm Hiểu Thêm
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tin Tức Công Nghệ Mới Nhất</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cập nhật những xu hướng và phát triển mới nhất trong thế giới công nghệ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Article 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={newsImg} 
                  alt="AI và Machine Learning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary">
                    <Tag className="w-3 h-3 mr-1" />
                    AI
                  </Badge>
                  <Badge variant="secondary">
                    <Tag className="w-3 h-3 mr-1" />
                    MachineLearning
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold">AI và Machine Learning: Xu Hướng Công Nghệ 2024</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Trí tuệ nhân tạo và học máy đang thay đổi cách chúng ta làm việc và sống. Từ chatbot thông minh đến xe tự lái...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    5 phút đọc
                  </div>
                  <Button variant="ghost" size="sm">
                    Đọc thêm
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* News Article 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">₿</div>
                  <div className="text-lg">Blockchain</div>
                </div>
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary">
                    <Tag className="w-3 h-3 mr-1" />
                    Blockchain
                  </Badge>
                  <Badge variant="secondary">
                    <Tag className="w-3 h-3 mr-1" />
                    Web3
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold">Blockchain và Web3: Tương Lai của Internet</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Công nghệ blockchain không chỉ dừng lại ở cryptocurrency. Web3 đang hứa hẹn mang lại một internet phi tập trung...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    7 phút đọc
                  </div>
                  <Button variant="ghost" size="sm">
                    Đọc thêm
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* News Article 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">5G</div>
                  <div className="text-lg">IoT</div>
                </div>
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary">
                    <Tag className="w-3 h-3 mr-1" />
                    5G
                  </Badge>
                  <Badge variant="secondary">
                    <Tag className="w-3 h-3 mr-1" />
                    IoT
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold">5G và IoT: Kết Nối Thông Minh Cho Thành Phố Tương Lai</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mạng 5G với tốc độ siêu nhanh đang mở ra kỷ nguyên mới cho Internet of Things (IoT)...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    6 phút đọc
                  </div>
                  <Button variant="ghost" size="sm">
                    Đọc thêm
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Software Section */}
      <section id="software" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Phần Mềm Và Công Cụ Đáng Chú Ý</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Khám phá những phần mềm và công cụ tốt nhất để nâng cao hiệu quả công việc
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Software 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm font-medium">5/5</span>
                  </div>
                  <Badge variant="outline">Miễn Phí</Badge>
                </div>
                <h3 className="text-xl font-semibold">Visual Studio Code</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Trình soạn thảo mã nguồn miễn phí, mạnh mẽ và linh hoạt được phát triển bởi Microsoft với hàng nghìn extension.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">Windows</Badge>
                  <Badge variant="secondary">macOS</Badge>
                  <Badge variant="secondary">Linux</Badge>
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Tải Về
                </Button>
              </CardContent>
            </Card>

            {/* Software 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm font-medium">5/5</span>
                  </div>
                  <Badge variant="outline">Freemium</Badge>
                </div>
                <h3 className="text-xl font-semibold">Notion</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Workspace đa năng kết hợp ghi chú, quản lý dự án, cơ sở dữ liệu và wiki trong một nền tảng duy nhất.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">Web</Badge>
                  <Badge variant="secondary">Mobile</Badge>
                  <Badge variant="secondary">Desktop</Badge>
                </div>
                <Button className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Dùng Thử
                </Button>
              </CardContent>
            </Card>

            {/* Software 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm font-medium">5/5</span>
                  </div>
                  <Badge variant="outline">Miễn Phí</Badge>
                </div>
                <h3 className="text-xl font-semibold">OBS Studio</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Phần mềm mã nguồn mở miễn phí dành cho live streaming và screen recording với tính năng chuyên nghiệp.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">Windows</Badge>
                  <Badge variant="secondary">macOS</Badge>
                  <Badge variant="secondary">Linux</Badge>
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Tải Về
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tips & Tricks Công Nghệ Hữu Ích</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những thủ thuật và mẹo hay giúp bạn sử dụng công nghệ hiệu quả hơn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tip 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <Badge variant="outline">Cơ Bản</Badge>
                  <Badge variant="secondary">Windows</Badge>
                </div>
                <h3 className="text-xl font-semibold">20 Phím Tắt Windows Mọi Người Nên Biết</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Các phím tắt Windows giúp bạn làm việc nhanh hơn và hiệu quả hơn. Từ Windows + D đến Ctrl + Shift + Esc...
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Áp dụng ngay lập tức</span>
                </div>
                <Button variant="outline" className="w-full">
                  Xem Chi Tiết
                </Button>
              </CardContent>
            </Card>

            {/* Tip 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <Badge variant="outline">Trung Cấp</Badge>
                  <Badge variant="secondary">Hardware</Badge>
                </div>
                <h3 className="text-xl font-semibold">Tối Ưu Hóa SSD Cho Hiệu Suất Tối Đa</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Hướng dẫn chi tiết cách tối ưu hóa SSD để có hiệu suất tốt nhất và tuổi thọ cao nhất cho ổ cứng của bạn.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">15-30 phút thực hiện</span>
                </div>
                <Button variant="outline" className="w-full">
                  Xem Chi Tiết
                </Button>
              </CardContent>
            </Card>

            {/* Tip 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <Badge variant="outline">Nâng Cao</Badge>
                  <Badge variant="secondary">Bảo Mật</Badge>
                </div>
                <h3 className="text-xl font-semibold">Bảo Mật Tài Khoản Online Với 2FA</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Hướng dẫn thiết lập bảo mật toàn diện cho tài khoản online với Password Manager và Two-Factor Authentication.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">1-2 giờ setup ban đầu</span>
                </div>
                <Button variant="outline" className="w-full">
                  Xem Chi Tiết
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Về TechHub</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tìm hiểu về người tạo ra TechHub và sứ mệnh của chúng tôi
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={avatarImg} 
                    alt="Bùi Công Tới" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-3xl font-bold mb-4">Bùi Công Tới</h3>
                  <p className="text-xl text-primary mb-4">Tech Enthusiast & Content Creator</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Xin chào! Tôi là Alex, một người đam mê công nghệ với hơn 8 năm kinh nghiệm trong lĩnh vực phát triển phần mềm và công nghệ thông tin. TechHub được tạo ra với mục tiêu "Democratize technology" - làm cho công nghệ trở nên dễ tiếp cận và dễ hiểu với mọi người.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">50K+</div>
                      <div className="text-sm text-muted-foreground">Followers</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Articles</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Chuyên môn:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">AI/ML</Badge>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="icon">
                      <a href="#" className="hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon">
                      <a href="#" className="hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon">
                      <a href="#" className="hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon">
                      <a href="#" className="hover:text-primary transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">TechHub</h3>
            <p className="text-muted-foreground mb-6">
              Khám phá thế giới công nghệ cùng chúng tôi
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 TechHub. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

