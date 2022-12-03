import style from './Header.module.css'
import logo from './logo.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const navbarList = [
  { name: 'Anasayfa', link: '/', isActive: true },
  { name: 'Discord', link: '/discord' },
  { name: 'Blog', link: '/blog' },
  { name: 'Etkinlikler', link: 'events' },
]

const DiscordButton = () => (
  <button className={style['discordButton']}>Discorda Katıl</button>
)

type NavbarItemProps = {
  name: string
  isActive?: boolean
  link: string
}
const NavbarItem = ({ item }: { item: NavbarItemProps }) => {
  return (
    <li>
      <a
        className={`${style.link} ${item.isActive && style.linkActive}`}
        href={item.link}
      >
        {item.name}
      </a>
    </li>
  )
}
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const genericHamburgerLine = style['genericHamburgerLine']
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 768 && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [size.width, isMenuOpen])

  const switchMenu = () => {
    setIsMenuOpen((p) => !p)
  }
  return (
    <div className={style.header}>
      <div className={style.headerLeft}>
        <div className={style.logo}>
          <Image alt="logo" src={logo} width={180} height={36} />
        </div>
        <nav className={style.navbar}>
          <ul
            className={`${style.mainMenu} ${
              !isMenuOpen ||
              (size.width > 768
                ? style['mainMenuClose']
                : style['mainMenuOpen'])
            }`}
          >
            {(isMenuOpen || size.width > 768) &&
              navbarList.map((item: any) => (
                <NavbarItem key={item.name} item={item} />
              ))}

            {isMenuOpen && size.width < 768 && <DiscordButton />}
          </ul>
        </nav>
      </div>

      <div className={style.headerRight}>
        {size.width > 768 ? (
          <DiscordButton />
        ) : (
          <button onClick={switchMenu} className={style.hamburger}>
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen ? style['part1'] : style['part2']
              }`}
            />

            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen ? style['part3'] : style['secondLine']
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen ? style['part5'] : style['part6']
              }`}
            />
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
