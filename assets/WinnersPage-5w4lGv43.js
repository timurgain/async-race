import{b as x,j as s,r as W,W as c,a as h,d as a,w as j,f as l}from"./index-C8GaIf0-.js";import{S as C,u as p,B as P,d as S,b as y,s as w,c as E,T as N,P as T,H as I}from"./Total-C-Vx2IzC.js";const A="_car_1wfif_1",Q="_car__icon_1wfif_13",d={car:A,car__icon:Q};function B({carID:t}){const{data:n}=x.useGetCarQuery(t);return n?s.jsx("div",{className:d.car,style:{color:n.color},children:s.jsx(C,{className:d.car__icon})}):null}function g({carID:t}){const{data:n}=x.useGetCarQuery(t);return n?s.jsx("p",{children:n==null?void 0:n.name}):null}const v="_main_1qiet_1",R="_main__header_1qiet_48",m={main:v,main__header:R},b="_winners_1xpvh_1",D="_winners__row_1xpvh_15",G="_winners__row_type_header_1xpvh_33",o={winners:b,winners__row:D,winners__row_type_header:G};function u({btnText:t,sortBy:n}){const r=p(),[e,_]=W.useState(c.ASC);function i(){r(h.mutateWinnersQueryParams({[a.SORT]:n,[a.ORDER]:e})),_(e===c.ASC?c.DESC:c.ASC)}return s.jsx(P,{kit:S.TABLE_M_YELLOW,onClick:i,children:t})}function L({}){const t=y(w.winnersQueryParams),{data:n}=j.useGetWinnersQuery(t),r=n==null?void 0:n.data;return r?s.jsxs("section",{className:o.winners,children:[s.jsxs("div",{className:E(o.winners__row,o.winners__row_type_header),children:[s.jsx(u,{btnText:"№",sortBy:l.ID}),s.jsx("p",{children:"CAR"}),s.jsx("p",{children:"NAME"}),s.jsx(u,{btnText:"WINS",sortBy:l.WINS}),s.jsx(u,{btnText:"BEST TIME",sortBy:l.TIME})]}),r==null?void 0:r.map(e=>s.jsxs("div",{className:o.winners__row,children:[s.jsx("p",{children:e.id}),s.jsx(B,{carID:e.id}),s.jsx(g,{carID:e.id}),s.jsx("p",{children:e.wins}),s.jsx("p",{children:e.time})]},e.id))]}):s.jsx("p",{children:"Loading..."})}const M="_section_aomr2_1",O={section:M};function $({}){const t=p(),n=y(w.winnersQueryParams),{data:r}=j.useGetWinnersQuery(n),e=n[a.PAGE],_=n[a.LIMIT],i=r==null?void 0:r.totalCount;return s.jsxs("section",{className:O.section,children:[s.jsx(N,{entity:"Records",total:i||0}),s.jsx(T,{currentPage:e||1,limit:_||1,totalCount:i||1,scrollPage:f=>t(h.mutateWinnersQueryParams({[a.PAGE]:f}))})]})}function H(){return s.jsxs(s.Fragment,{children:[s.jsx(I,{}),s.jsxs("main",{className:m.main,children:[s.jsx("h1",{className:m.main__header,children:"WINNERS"}),s.jsx(L,{}),s.jsx($,{})]})]})}export{H as default};
