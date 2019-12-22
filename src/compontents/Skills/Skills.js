import React from 'react';
import Nav from './Navigation/Navigation';
import ListWrapper from './ListWrapper/ListWrapper'
import styles from './Skills.module.scss'

const Skills = () =>(
    <section className={styles.wrapper}>
        <Nav></Nav>
        <ListWrapper></ListWrapper>
    </section>
)

export default Skills;