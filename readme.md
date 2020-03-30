## Break Points
**Mobile Min width:** 320px
**Table Min width:** 768px
**Desktop Min width:** 1025px  - // Laptops
**Larg Desktop Min width:** 1366px

*Subtract 1px to get Max width*

## Media Queries
`breakPoints` object
```
mobileOnly: `@media (min-width: ${xsMin}px) and (max-width: ${xsMax}px)`,
tabletOnly: `@media (min-width: ${smMin}px) and (max-width: ${smMax}px)`,

tablet: `@media all and  (min-width: ${smMin}px)`,
desktop: `@media all and  (min-width: ${mdMin}px)`,
largeDesktop: `@media all and  (min-width: ${lgMin}px)`,

mobileMax: `@media all and (max-width: ${xsMax}px)`,
tabletMax: `@media all and  (max-width: ${smMax}px)`,
```
## Col
Col component props *MUST WRAP WITH ROW COMPONENT*
```
<Row>
    <Col
        xs="12"
        sm="6" 
        md="4" 
        lg="4" 
        alignSelf="center" 
        order="3"
    >
        {children}
    </Col>
<Row>
```

##Row

```
<Row
    alignContent="flex-start"
    alignItems="center"
    justifyContent="space-between"
>
    {children}
</Row>
```

## Container
width on desktop = 720px
width on tablet = 720px
width on mobiles = 100%
```
<Container
    fluid //for full width
>
    {children}
</Container>
```