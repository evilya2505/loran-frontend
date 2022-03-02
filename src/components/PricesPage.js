import React from "react";
import Header from './Header';

function PricesPage({handlePageScroll}) {
  return (
    <>
      <Header handlePageScroll={handlePageScroll} />
      <div className="prices-wrapper">
        <div className="prices">
          <h1 className="prices__title">Цены</h1>

          <main className="prices__content">
            <p className="prices__text">* Оплата: наличная, безналичная  или по карте</p>
            <table className="prices__table">
              <tbody>
                <tr className="prices__table-tr">
                  <th className="prices__table-th">Код услуги</th>
                  <th className="prices__table-th">Наименование услуги</th>
                  <th className="prices__table-th">Стоимость</th>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B01.001.001</td>
                  <td className="prices__table-td">Прием (осмотр, консультация) врача-акушера-гинеколога повторный</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B01.001.002</td>
                  <td className="prices__table-td">Прием (осмотр, консультация) врача-акушера-гинеколога первичный</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B01.001.003</td>
                  <td className="prices__table-td">Прием (осмотр, консультация) врача-акушера-гинеколога с ультразвуковым исследованием яичников для оценки овариального резерва</td>
                  <td className="prices__table-td">3000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B01.001.004</td>
                  <td className="prices__table-td">Прием (осмотр, консультация) врача-акушера-гинеколога беременной первичный</td>
                  <td className="prices__table-td">2000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B01.001.005</td>
                  <td className="prices__table-td">Прием (осмотр, консультация) врача-акушера-гинеколога беременной повторный</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A05.30.001</td>
                  <td className="prices__table-td">Кардиотокография плода</td>
                  <td className="prices__table-td">3500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B03.001.005</td>
                  <td className="prices__table-td">Комплексная услуга по медикаментозному прерыванию беременности</td>
                  <td className="prices__table-td">7500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.037</td>
                  <td className="prices__table-td">Искусственное прерывание беременности</td>
                  <td className="prices__table-td">7500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.079</td>
                  <td className="prices__table-td">Вакуум-аспирация эндометрия</td>
                  <td className="prices__table-td">4500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.084</td>
                  <td className="prices__table-td">Удаление полипа женских половых органов</td>
                  <td className="prices__table-td">6500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.090</td>
                  <td className="prices__table-td">Снятие швов с шейки матки</td>
                  <td className="prices__table-td">3500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.091.001</td>
                  <td className="prices__table-td">Марсупиализация абсцесса или кисты большой железы преддверия влагалища</td>
                  <td className="prices__table-td">7500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.096.001</td>
                  <td className="prices__table-td">Электроэксцизия новообразования вульвы</td>
                  <td className="prices__table-td">4500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А02.20.007</td>
                  <td className="prices__table-td">Аускультация плода с помощью фетального доплера</td>
                  <td className="prices__table-td">500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.011</td>
                  <td className="prices__table-td">Биопсия шейки матки</td>
                  <td className="prices__table-td">3500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.011.001</td>
                  <td className="prices__table-td">Биопсия шейки матки радиоволновая</td>
                  <td className="prices__table-td">3500</td>
                </tr>

                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.011.002</td>
                  <td className="prices__table-td">Биопсия шейки матки радиоволновая конусовидная</td>
                  <td className="prices__table-td">3000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.011.003</td>
                  <td className="prices__table-td">Биопсия шейки матки ножевая</td>
                  <td className="prices__table-td">3500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.012</td>
                  <td className="prices__table-td">Микроспринцевание (ирригация) влагалища</td>
                  <td className="prices__table-td">300</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.013</td>
                  <td className="prices__table-td">Тампонирование лечебное влагалища</td>
                  <td className="prices__table-td">300</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.014</td>
                  <td className="prices__table-td">Введение внутриматочной спирали</td>
                  <td className="prices__table-td">2000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.015</td>
                  <td className="prices__table-td">Удаление внутриматочной спирали</td>
                  <td className="prices__table-td">2000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.01.001</td>
                  <td className="prices__table-td">Ультразвуковое исследование мягких тканей (одна анатомическая зона)</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.03.001</td>
                  <td className="prices__table-td">Ультразвуковое исследование костей</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.06.001</td>
                  <td className="prices__table-td">Ультразвуковое исследование селезёнки</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.06.002</td>
                  <td className="prices__table-td">Ультразвуковое исследование лимфатических узлов(одна анатомическая зона)</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.12.001.004</td>
                  <td className="prices__table-td">Ультразвуковая доплерография артерий методом мониторирования</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.06.003</td>
                  <td className="prices__table-td">Ультразвуковое исследование вилочковой железы</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.14.001</td>
                  <td className="prices__table-td">Ультразвуковое исследование печени</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.30.010</td>
                  <td className="prices__table-td">Ультразвуковое исследование органов малого таза комплексное (трансвагинальное  и трансабдоминальное)</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.30.001</td>
                  <td className="prices__table-td">Ультразвуковое исследование плода</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.30.001.001</td>
                  <td className="prices__table-td">Ультразвуковое исследование плода при сроке беременности до тринадцати недель</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.30.008</td>
                  <td className="prices__table-td">Ультразвуковое исследование  в режиме 3D</td>
                  <td className="prices__table-td">3500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.30.001.003</td>
                  <td className="prices__table-td">Ультразвуковое скрининговое исследование при сроке беременности одиннадцатая - четырнадцатая недели по оценке антенатального развития плода с целью выявления хромосомных аномалий, пороков развития, рисков задержки роста плода, преждевременных родов, преэклампсии (скрининг I)</td>
                  <td className="prices__table-td">2500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.30.001.004</td>
                  <td className="prices__table-td">Ультразвуковое скрининговое исследование при сроке беременности одиннадцатая - четырнадцатая недели по оценке антенатального развития плодов с целью выявления хромосомных аномалий, пороков развития, рисков задержки роста плода, преждевременных родов, преэклампсии при многоплодной беременности (скрининг I)</td>
                  <td className="prices__table-td">2500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.30.001.005</td>
                  <td className="prices__table-td">Ультразвуковое скрининговое исследование при сроке беременности девятнадцатая - двадцать первая недели по оценке антенатального развития плода с целью выявления хромосомных аномалий, пороков развития, рисков задержки роста плода, преждевременных родов, преэклампсии (скрининг II)</td>
                  <td className="prices__table-td">3500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.30.001.006</td>
                  <td className="prices__table-td">Ультразвуковое скрининговое исследование при сроке беременности девятнадцатая - двадцать первая недели по оценке антенатального развития плодов с целью выявления хромосомных аномалий, пороков развития, рисков задержки роста плода, преждевременных родов, преэклампсии при многоплодной беременности (скрининг II)</td>
                  <td className="prices__table-td">3500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.30.001.007</td>
                  <td className="prices__table-td">Ультразвуковое исследование плода в III триместре беременности</td>
                  <td className="prices__table-td">3500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.30.001.008</td>
                  <td className="prices__table-td">Ультразвуковое исследование плодов в III триместре многоплодной беременности</td>
                  <td className="prices__table-td">4000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.20.001.004</td>
                  <td className="prices__table-td">Улитразвуковое исследование шейки матки(УЗ-цервикометрия)</td>
                  <td className="prices__table-td">1000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.20.001.001</td>
                  <td className="prices__table-td">Ультразвуковое исследование матки трансвагинальное</td>
                  <td className="prices__table-td">1500</td>
                </tr>

                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.20.003</td>
                  <td className="prices__table-td">Ультразвуковое исследование фолликулогенеза</td>
                  <td className="prices__table-td">1000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A03.20.001</td>
                  <td className="prices__table-td">Кольпоскопия</td>
                  <td className="prices__table-td">3000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А11.01.010</td>
                  <td className="prices__table-td">Введение исскуственных имплантатов в мягкие ткани</td>
                  <td className="prices__table-td">5000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А11.01.013</td>
                  <td className="prices__table-td">Введение исскуственных наполнителей в мягкие ткани половых органов, с целью коррекции формы.</td>
                  <td className="prices__table-td">В зависимости от количества введённого препарата</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А11.01.020</td>
                  <td className="prices__table-td">Снятие послеоперационных швов, лигатур</td>
                  <td className="prices__table-td">2000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B01.047.005</td>
                  <td className="prices__table-td">Прием (осмотр, консультация) врача-терапевта участкового первичный</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B01.047.006</td>
                  <td className="prices__table-td">Прием (осмотр, консультация) врача-терапевта участкового повторный</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.12.003</td>
                  <td className="prices__table-td">Внутривенное введение лекарственных препаратов (без лекарственных средств)</td>
                  <td className="prices__table-td">500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.02.002</td>
                  <td className="prices__table-td">Внутримышечное введение лекарственных препаратов</td>
                  <td className="prices__table-td">250</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А11.12.009</td>
                  <td className="prices__table-td">Взятие крови из периферической вены</td>
                  <td className="prices__table-td">250</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А11.01.002</td>
                  <td className="prices__table-td">Подкожное введение препаратов</td>
                  <td className="prices__table-td">250</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.002</td>
                  <td className="prices__table-td">Получение цервикального мазка</td>
                  <td className="prices__table-td">250</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.005</td>
                  <td className="prices__table-td">Получение влагалищного мазка</td>
                  <td className="prices__table-td">250</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.040</td>
                  <td className="prices__table-td">Биопсия вульвы</td>
                  <td className="prices__table-td">3500</td>
                </tr>

                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.041</td>
                  <td className="prices__table-td">Введение акушерского разгружающего поддерживающего кольца (пессария)</td>
                  <td className="prices__table-td">3000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A11.20.042</td>
                  <td className="prices__table-td">Извлечение акушерского разгружающего поддерживающего кольца (пессария)</td>
                  <td className="prices__table-td">2000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.14.002</td>
                  <td className="prices__table-td">Ультразвуковое исследование желчного пузыря и протоков </td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А04.16.004</td>
                  <td className="prices__table-td">Ультразвуковое исследование пищевода</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.22.001</td>
                  <td className="prices__table-td">Ультразвуковое исследование щитовидной железы и паращитовидных желез</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.22.002</td>
                  <td className="prices__table-td">Ультразвуковое исследование надпочечников</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.22.003</td>
                  <td className="prices__table-td">Ультразвуковое исследование паращитовидных желез</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.28.001</td>
                  <td className="prices__table-td">Ультразвуковое исследование почек и надпочечников</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.28.002.001</td>
                  <td className="prices__table-td">Ультразвуковое исследование почек</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.28.002.002</td>
                  <td className="prices__table-td">Ультразвуковое исследование мочеточников</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.28.002.003</td>
                  <td className="prices__table-td">Ультразвуковое исследование мочевого пузыря</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.28.002.004</td>
                  <td className="prices__table-td">Ультразвуковое исследование уретры</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.30.003</td>
                  <td className="prices__table-td">Ультразвуковое исследование забрюшинного пространства</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">A04.20.002</td>
                  <td className="prices__table-td">Ультразвуковое исследование молочных желез</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B01.047.009</td>
                  <td className="prices__table-td">Ежедневный осмотр врачом-терапевтом с наблюдением и уходом среднего и младшего медицинского персонала в отделении стационара</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.079</td>
                  <td className="prices__table-td">Внутриматочная биопсия</td>
                  <td className="prices__table-td">3500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А12.10.006</td>
                  <td className="prices__table-td">Электрокардиография</td>
                  <td className="prices__table-td">3000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.021</td>
                  <td className="prices__table-td">Рассечение девственной плевы</td>
                  <td className="prices__table-td">18500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.060</td>
                  <td className="prices__table-td">Восстановление девственной плевы</td>
                  <td className="prices__table-td">18500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.030</td>
                  <td className="prices__table-td">Восстановление вульвы и промежности</td>
                  <td className="prices__table-td">23500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.066</td>
                  <td className="prices__table-td">Рассечение синехий малых половых губ</td>
                  <td className="prices__table-td">4500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А16.20.067</td>
                  <td className="prices__table-td">Резекция малых половых губ</td>
                  <td className="prices__table-td">23500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А20.20.002.001</td>
                  <td className="prices__table-td">Воздействие лечебной грязью вагинально </td>
                  <td className="prices__table-td">2500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">А21.20.001</td>
                  <td className="prices__table-td">Массаж при заболеваниях женских половых органов</td>
                  <td className="prices__table-td">2000</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B01.001.007</td>
                  <td className="prices__table-td">Ежедневный осмотр врачом-акушером-гинекологом, с наблюдением и уходом среднего и младшего медицинского персонала в отделении стационара</td>
                  <td className="prices__table-td">1500</td>
                </tr>
                <tr className="prices__table-tr">
                  <td className="prices__table-td">B01.001.008</td>
                  <td className="prices__table-td">Ежедневный осмотр врачом-акушером-гинекологом беременной, с наблюдением и уходом среднего и младшего медицинского персонала в отделении стационара</td>
                  <td className="prices__table-td">1500</td>
                </tr>
              </tbody>

            </table>
          </main>
        </div>
      </div>
    </>

  )
}

export default PricesPage;