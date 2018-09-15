import React, { Component } from 'react'
import { render } from 'react-dom'

import * as Hola from '../../src'

class Demo extends Component {
  render() {
    const myAvatarURL = 'https://avatars.githubusercontent.com/u/19969470'
    return (
      <Hola.Root lang="en">
        <Hola.Container>
          <Hola.CardStack container={Hola.Columns}>
            <Hola.CardStackTitle>UI Components</Hola.CardStackTitle>
            <Hola.Card>
              <Hola.CardTitle>Button</Hola.CardTitle>
              <p>
                <Hola.SubmitButton>Submit</Hola.SubmitButton>{' '}
                <Hola.Button>Normal</Hola.Button>{' '}
                <Hola.LinkButton>Link</Hola.LinkButton>
              </p>
              <p>
                <Hola.Button primary>Primary</Hola.Button>{' '}
                <Hola.Button ghost>Ghost</Hola.Button>
              </p>
            </Hola.Card>
            <Hola.Card>
              <Hola.Image>
                https://source.unsplash.com/featured/?head
              </Hola.Image>
              <Hola.CardTitle>Card with Image</Hola.CardTitle>
              <p>
                Nulla neque ducimus, natus a voluptatibus quae minima cumque
                tenetur iusto modi. Harum repellendus fugit laboriosam quia
                beatae tempore voluptates?
              </p>
            </Hola.Card>
            <Hola.Card>
              <Hola.CardTitle>Avatar</Hola.CardTitle>
              <Hola.Avatar round>{myAvatarURL}</Hola.Avatar>{' '}
              <Hola.Avatar radii>{myAvatarURL}</Hola.Avatar>{' '}
              <Hola.Avatar round highlighted>
                {myAvatarURL}
              </Hola.Avatar>{' '}
              <Hola.Avatar radii highlighted>
                {myAvatarURL}
              </Hola.Avatar>
            </Hola.Card>
            <Hola.Card>
              <Hola.CardTitle>
                Badge
                <Hola.Badge>0.1.0-dev.1</Hola.Badge>
              </Hola.CardTitle>
              <p>
                This is a very long title
                <Hola.Badge>Uncategorized</Hola.Badge>
                <Hola.Badge radii>233</Hola.Badge>
              </p>
            </Hola.Card>
            <Hola.Card>
              <Hola.Image>https://source.unsplash.com/featured/?sky</Hola.Image>
            </Hola.Card>
            <Hola.Card>
              <Hola.CardListItem>
                <h3>Card List Item 1</h3>
                <p>Posted at Aug 17th.</p>
              </Hola.CardListItem>
              <Hola.CardListItem>
                <h3>Card List Item 2</h3>
                <p>Posted at Dec 25th.</p>
              </Hola.CardListItem>
              <Hola.CardListItem>
                <h3>Card List Item 3</h3>
                <p>Posted at Jun 4th.</p>
              </Hola.CardListItem>
            </Hola.Card>
            <Hola.Card>
              <Hola.CardTitle>Aut, atque porro?</Hola.CardTitle>
              <p>
                Corrupti odit adipisci molestiae expedita quasi necessitatibus.
                Ipsam aliquam cumque temporibus incidunt quidem possimus,
                voluptas, alias nam molestias labore pariatur!
              </p>
            </Hola.Card>
          </Hola.CardStack>
        </Hola.Container>

        {/** Begin of Shit **/}
        <Hola.Container>
          <Hola.CardStackTitle>
            Scrollable Horizontal Layout
          </Hola.CardStackTitle>
        </Hola.Container>
        <Hola.ScrollableHori>
          <Hola.Container>
            {Array(9)
              .fill(0)
              .map((_, idx) => (
                <Hola.Card tiny key={idx}>
                  <Hola.Image>
                    https://source.unsplash.com/featured/?head
                  </Hola.Image>
                  <Hola.CardTitle tag="h4">Tiny Card</Hola.CardTitle>
                </Hola.Card>
              ))}
          </Hola.Container>
        </Hola.ScrollableHori>
        {/** End of Shit **/}

        <Hola.Container>
          <Hola.CardStackTitle>Sidebar Layout</Hola.CardStackTitle>
          <Hola.Sidebar.Layout>
            <Hola.Sidebar.Main>
              <Hola.CardStack>
                <Hola.Card>
                  <Hola.CardTitle>Typography</Hola.CardTitle>
                  <Hola.Content>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi libero debitis consequatur error quae id ipsa,
                      earum velit vel. Hic?
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Minima sed assumenda cupiditate, laudantium facere magni?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Tempore, nam. Excepturi, eaque necessitatibus, quasi,
                      cupiditate eveniet explicabo ducimus dolorum distinctio
                      voluptas non et. Libero ratione quibusdam, beatae rerum
                      aliquid officia.
                    </p>
                    <Hola.Image>
                      https://source.unsplash.com/featured/?step
                    </Hola.Image>
                  </Hola.Content>
                  <Hola.Content lang="zh-CN">
                    <h3>阿房宫赋</h3>
                    <p>
                      六王毕，四海一，蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角。盘盘焉，囷囷焉，蜂房水涡，矗不知乎几千万落。长桥卧波，未云何龙？复道行空，不霁何虹？高低冥迷，不知东西。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐。
                    </p>
                    <p>
                      妃嫔媵嫱，王子皇孙，辞楼下殿，辇来于秦，朝歌夜弦，为秦宫人。明星荧荧，开妆镜也；绿云扰扰，梳晓鬟也；渭流涨腻，弃脂水也；烟斜雾横，焚椒兰也。雷霆乍惊，宫车过也；辘辘远听，杳不知其所之也。一肌一容，尽态极妍，缦立远视，而望幸焉。有不见者，三十六年。
                    </p>
                    <p>
                      燕、赵之收藏，韩、魏之经营，齐、楚之精英，几世几年，剽掠其人，倚叠如山。一旦不能有，输来其间。鼎铛玉石，金块珠砾，弃掷逦迤，秦人视之，亦不甚惜。嗟乎！一人之心，千万人之心也。秦爱纷奢，人亦念其家。奈何取之尽锱铢，用之如泥沙！使负栋之柱，多于南亩之农夫；架梁之椽，多于机上之工女；钉头磷磷，多于在庾之粟粒；瓦缝参差，多于周身之帛缕；直栏横槛，多于九土之城郭；管弦呕哑，多于市人之言语。使天下之人，不敢言而敢怒。独夫之心，日益骄固。戍卒叫，函谷举，楚人一炬，可怜焦土！
                    </p>
                    <p>
                      灭六国者，六国也，非秦也；族秦者，秦也，非天下也。使六国各爱其人，则足以拒秦；使秦复爱六国之人，则递三世可至万世而为君，谁得而族灭也？秦人不暇自哀，而后人哀之；后人哀之而不鉴之，亦使后人而复哀后人也。
                    </p>
                  </Hola.Content>
                  <Hola.Content>
                    <h3>Code</h3>
                    <pre>
                      <code>{`\
export function Layout(props) {
  const err = new Error(
    'Sidebar.Layout accepts exactly one Sidebar.Main and Sidebar.Aside as children'
  )
  const { children } = props
  const childrenArray = React.Children.toArray(children)
  if (childrenArray.length !== 2) throw err
  let sidebarPosition
  if (childrenArray[0].type === Main && childrenArray[1].type === Aside)
    sidebarPosition = 'right'
  else if (childrenArray[0].type === Aside && childrenArray[1].type === Main)
    sidebarPosition = 'left'
  else throw err
  return <LayoutStyled {...props} sidebarPosition={sidebarPosition} />
}`}</code>
                    </pre>
                  </Hola.Content>
                </Hola.Card>
              </Hola.CardStack>
            </Hola.Sidebar.Main>
            <Hola.Sidebar.Aside>
              <Hola.CardStack>
                <Hola.Card>Lorem ipsum dolor sit.</Hola.Card>
              </Hola.CardStack>
            </Hola.Sidebar.Aside>
          </Hola.Sidebar.Layout>
        </Hola.Container>
      </Hola.Root>
    )
  }
}

render(<Demo />, document.getElementById('demo'))
document.body.style.margin = '0px'
document.body.style.padding = '0px'
