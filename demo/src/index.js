import React, { Component } from 'react'
import { render } from 'react-dom'

import * as Hola from '../../src'

class Demo extends Component {
  render() {
    const myAvatarURL = 'https://avatars.githubusercontent.com/u/19969470'
    return (
      <Hola.Root lang="en">
        <Hola.Container>
          <Hola.CardStack layout={Hola.Columns}>
            <Hola.Headline>UI Components</Hola.Headline>
            <Hola.Card>
              <Hola.Headline>Button</Hola.Headline>
              <p>
                <Hola.SubmitButton>Submit</Hola.SubmitButton>{' '}
                <Hola.Button>Normal</Hola.Button>{' '}
                <Hola.LinkButton href="javascript:void 0">Link</Hola.LinkButton>
              </p>
              <p>
                <Hola.Button primary>Primary</Hola.Button>{' '}
                <Hola.Button ghost>Ghost</Hola.Button>
              </p>
            </Hola.Card>
            <Hola.Card>
              <Hola.Headline>VMenu</Hola.Headline>
              <Hola.VMenu>
                <Hola.Link href="javascript:void 0">
                  苟利国家生死以，岂因祸福避趋之。敢同恶鬼争高下，不向霸王让寸分。
                </Hola.Link>
                <Hola.Link href="javascript:void 0">毛泽东思想</Hola.Link>
                <Hola.Link href="javascript:void 0">
                  邓小平理论
                  <Hola.Badge>微小的贡献</Hola.Badge>
                </Hola.Link>
                <Hola.Link href="javascript:void 0" active>
                  三个代表重要思想
                  <Hola.Badge>重要</Hola.Badge>
                  <Hola.Badge radii>64</Hola.Badge>
                </Hola.Link>
                <Hola.Link href="javascript:void 0">科学发展观</Hola.Link>
              </Hola.VMenu>
            </Hola.Card>
            <Hola.Card>
              <Hola.Image>
                https://source.unsplash.com/featured/?head
              </Hola.Image>
              <Hola.Headline>Card with Image</Hola.Headline>
              <p>
                Nulla neque ducimus, natus a voluptatibus quae minima cumque
                tenetur iusto modi. Harum repellendus fugit laboriosam quia
                beatae tempore voluptates?
              </p>
            </Hola.Card>
            <Hola.Card>
              <Hola.Headline>Avatar</Hola.Headline>
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
              <Hola.Headline>
                Badge
                <Hola.Badge>0.1.0-dev.1</Hola.Badge>
              </Hola.Headline>
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
              <Hola.CardItem>
                <h3>Card List Item 1</h3>
                <p>Posted at Aug 17th.</p>
              </Hola.CardItem>
              <Hola.CardItem>
                <h3>Card List Item 2</h3>
                <p>Posted at Dec 25th.</p>
              </Hola.CardItem>
              <Hola.CardItem>
                <h3>Card List Item 3</h3>
                <p>Posted at Jun 4th.</p>
              </Hola.CardItem>
            </Hola.Card>
            <Hola.Card>
              <Hola.Headline>Info Sheet</Hola.Headline>
              <Hola.InfoSheet>
                <dt>周朴园</dt>
                <dd>（忽然严厉地）你来干什么？</dd>
                <dt>鲁侍萍</dt>
                <dd>不是我要来的。</dd>
                <dt>周朴园</dt>
                <dd>谁指使你来的？</dd>
                <dt>鲁侍萍</dt>
                <dd>（悲愤）命！不公平的命指使我来的。</dd>
                <dt>周朴园</dt>
                <dd>（冷冷地）三十年的工夫你还是找到这儿来了。</dd>
                <dt>鲁侍萍</dt>
                <dd>
                  （愤怨）我没有找你，我没有找你，我以为你早死了。我今天没想到到这儿来，这是天要我在这儿又碰见你。
                </dd>
              </Hola.InfoSheet>
            </Hola.Card>
            <Hola.Card>
              <Hola.Headline>Aut, atque porro?</Hola.Headline>
              <p>
                Corrupti odit adipisci molestiae expedita quasi necessitatibus.
                Ipsam aliquam cumque temporibus incidunt quidem possimus,
                voluptas, alias nam molestias labore pariatur!
              </p>
            </Hola.Card>
          </Hola.CardStack>

          <Hola.CardStack layout={Hola.ScrollableHori}>
            <Hola.Headline>Scrollable Horizontal Layout</Hola.Headline>
            {Array(9)
              .fill(0)
              .map((_, idx) => (
                <Hola.Card tiny key={idx}>
                  <Hola.Image>
                    https://source.unsplash.com/featured/?head
                  </Hola.Image>
                  <Hola.Headline>Tiny Card</Hola.Headline>
                </Hola.Card>
              ))}
          </Hola.CardStack>

          <Hola.CardStack layout={Hola.Sidebar}>
            <Hola.Headline>Sidebar Layout</Hola.Headline>
            <main>
              <Hola.CardStack>
                <Hola.Card>
                  <Hola.Headline>Table</Hola.Headline>
                  <Hola.Table fullwidth>
                    <thead>
                      <tr>
                        <th>Lorem.</th>
                        <th>Reiciendis.</th>
                        <th>Ducimus?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.
                        </td>
                        <td>
                          Ab voluptates dolorum adipisci ut impedit aperiam
                          velit!
                        </td>
                        <td>Eum iusto ad dolores sit obcaecati ipsa sint?</td>
                      </tr>
                      <tr>
                        <td>23333</td>
                        <td>23333</td>
                        <td>23333</td>
                      </tr>
                    </tbody>
                  </Hola.Table>
                </Hola.Card>
                <Hola.Card>
                  <Hola.Headline>Typography</Hola.Headline>
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
            </main>
            <aside>
              <Hola.CardStack>
                <Hola.Card>Lorem ipsum dolor sit.</Hola.Card>
                <Hola.Card>Lorem ipsum dolor sit.</Hola.Card>
                <Hola.Card>Lorem ipsum dolor sit.</Hola.Card>
              </Hola.CardStack>
            </aside>
          </Hola.CardStack>
        </Hola.Container>
      </Hola.Root>
    )
  }
}

render(<Demo />, document.getElementById('demo'))
