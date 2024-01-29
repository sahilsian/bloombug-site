import { useState } from 'react'
import { Cover } from '../Cover'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { CallToActionButton } from '../CallToActionButton'
import { Columns } from '../Columns'
import { Column } from '../Column'
import { PostSearch } from '../PostSearch'
import { Theme } from '../../lib/theme'
import { ContactForm } from '../ContactForm'
import { LeadForm } from '../LeadForm'
import { Spacer } from '../Spacer'
import { PostFeatures } from '../PostFeatures'
import { Gallery } from '../Gallery'
import { Query } from '../Query'
import { Reviews } from '../Reviews'
import { Group } from '../Group'
import { GravityFormsComponent } from '../GravityFormsFields'
import { ImageSlider } from '../ImageSlider'
import { Card } from '../Card'
import { Icon } from '../Icon'
import { StoreButtons } from '../StoreButtons'
import { Price } from '../Price'
import { CheckedList } from '../CheckedList'
import { ContactBar } from '../ContactBar'
import { List } from '../List'
import { ListItem } from '../List/ListItem'
import { Footer } from '../Footer'
import { Calendly } from '../Calendly'
import { IDButton } from '../IDButton'
import { IdDiv } from '../IdDiv'
import { AppointmentOpenButton } from '../AppointmentOpenButton'
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const BlockRenderer = ({ items, blocks }) => {
    const [open, setOpen] = useState(false);

    return blocks.map(block => {
        switch (block.name) {
            case "gravityforms/form": {
                return <GravityFormsComponent formId={block.attributes.formId}></GravityFormsComponent>
            }
            case "acf/contactbar" : {
                return <ContactBar phoneNumber={block.attributes.data.phone} email={block.attributes.data.email}></ContactBar>
            }
            case "acf/checkedlist": {
                return <CheckedList items={block.attributes?.data}></CheckedList>
            }
            case "core/list": {
                return <List key={block.id}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </List>
            }
            case "acf/appointmentopenbutton": {
                console.log(block)
                return <AppointmentOpenButton
                key={block.id}
                buttonLabel={block.attributes.data.label}
                align={block.attributes.data.align}
                type={block.attributes.data.type}
                calendlyURL={block.attributes.data.calendly_link}
            ></AppointmentOpenButton>
            }
            case "acf/iddiv" : {
                return <IdDiv id={block.attributes.data.id}></IdDiv>
            }
            case "acf/idbutton" : {
                return <IDButton key={block.id}
                buttonLabel={block.attributes.data.label}
                destination={block.attributes.data.id || ""}
                align={block.attributes.data.align}
                type={block.attributes.data.type} ></IDButton>
            }
            case "acf/price": {
                return <Price price={block.attributes.data.price} ></Price>
            }
            case "acf/imageslider": {
                return <ImageSlider key={block.id} data={block.attributes.data}></ImageSlider>
            }
            case "acf/storebuttons": {
                return <StoreButtons key={block.id} data={block.attributes.data}></StoreButtons>
            }
            case "acf/footer": {
                return <Footer items={items} data={block.attributes.data}></Footer>
            }
            case "acf/card": {
                return <Card key={block.id} data={block.attributes.data}></Card>
            }
            case "acf/icon": {
                return <Icon key={block.id} data={block.attributes.data}></Icon>
            }
            case "acf/contactform": {
                return <ContactForm key={block.id} formId={block.attributes.data.form_id}></ContactForm>
            }
            case "acf/leadform": {
                return <LeadForm key={block.id} formId={block.attributes.data.form_id}></LeadForm>
            }
            case "acf/ctabutton": {
                return <CallToActionButton
                    key={block.id}
                    buttonLabel={block.attributes.data.label}
                    destination={block.attributes.data.destination || "/"}
                    align={block.attributes.data.align}
                    type={block.attributes.data.type}
                ></CallToActionButton>
            }
            case "acf/externalctabutton": {
                return <CallToActionButton
                    color={"#F1B007"}
                    key={block.id}
                    buttonLabel={block.attributes.data.label}
                    destination={block.attributes.data.destination?.url}
                    target={block.attributes.data?.destination?.target}
                    align={block.attributes.data.align}
                ></CallToActionButton>
            }
            case "acf/reviews": {
                return <Reviews place_id={block.attributes.data.place_id || "No placeID found"} key={block.id}>
                </Reviews>
            }
            case "acf/postsearch": {
                return <PostSearch key={block.id}></PostSearch>
            }
            case "acf/hotelproperties": {
                return <PostFeatures key={block.id} price={block.attributes.price} vehicles={block.attributes.vehicles} nearAirport={block.attributes.near_airport} microMobilityAvailable={block.attributes.micro_mobility_available}></PostFeatures>
            }
            case "acf/calendly": {
                console.log(block)
                return <Calendly calendlyURL={block.attributes.data.calendlyURL}>
                </Calendly>
            }
            case "core/query": {
                <Query key={block.id}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </Query>
            }
            case "core/list-item": {
                return <ListItem key={block.id} content={block.originalContent}></ListItem>
            }
            case "core/gallery": {
                return <Gallery key={block.id} columns={block.attributes.columns || 3} cropImages={block.attributes.imageCrop} items={block.innerBlocks}></Gallery>
            }
            case "core/spacer": {
                return <Spacer key={block.id} height={block.attributes.height || "81px"}></Spacer>
            }
            case "core/paragraph": {
                return <Paragraph
                    className={block.attributes.className}
                    key={block.id}
                    textAlign={block.attributes.align}
                    content={block.attributes.content}
                    fontSize={block.attributes.style?.typography?.fontSize}
                    textColor={Theme[block.attributes.textColor] || block.attributes.style?.color?.text}
                ></Paragraph>
            }
            case "core/post-title": {
                return <Heading
                    key={block.id}
                    textAlign={block.attributes.textAlign}
                    content={block.attributes.content}
                    level={block.attributes.level}
                />
            }
            case "core/heading": {
                return <Heading
                    className={block.attributes.className}
                    typography={block.attributes?.style?.typography}
                    key={block.id}
                    textColor={block.attributes?.textColor}
                    textAlign={block.attributes.textAlign}
                    content={block.attributes.content}
                    level={block.attributes.level}
                />
            }
            case "core/cover": {
                return <Cover className={block.attributes?.className} key={block.id} background={block.attributes.url}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </Cover>
            }
            case "core/columns": {
                return <Columns className={block.attributes?.className} key={block.id} stackOnMobile={block.attributes.isStackedOnMobile}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </Columns>
            }
            case "core/column": {
                return <Column padding={block.attributes.style?.spacing?.padding} bgColor={block.attributes.style?.color?.background} className={block.attributes?.className} layout={block.attributes?.layout || ""} verticalAlignment={block.attributes.verticalAlignment || false} key={block.id} width={block.attributes.width}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </Column>
            }
            case "core/group": {
                return <Group border={block.attributes.style?.border} padding={block.attributes.style?.spacing?.padding} className={block.attributes.className} contentSize={block.attributes.layout.contentSize} bgColor={block.attributes?.style?.color?.background} keys={block.id}>
                    <BlockRenderer blocks={block.innerBlocks}></BlockRenderer>
                </Group>
            }
            case "core/block": {
                return <BlockRenderer keys={block.id} blocks={block.innerBlocks}>
                </BlockRenderer>
            }
            case "core/image": {
                console.log(block)
                return (
                    <div className={`flex align-center cursor-pointer justify-center rounded-lg overflow-hidden`}>
                        <Image
                            onClick={() => setOpen(true)}
                            key={block.id}
                            src={block.attributes.url}
                            height={block.attributes.height}
                            width={block.attributes.width}
                            alt={block.attributes.alt || ""}
                            className={block.attributes.className || ""}
                        />
                        {/* <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            slides={[
                                { src: block.attributes.url },
                              ]}
                            
                        ></Lightbox> */}
                    </div>

                )
            }
            default: {
                console.log("UNKNOWN:", block)
                return null;
            }
        }
    })
} 