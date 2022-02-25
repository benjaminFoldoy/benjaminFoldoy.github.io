class character{
  constructor(nickname, color, initials){
    this.nickname = nickname;
    this.color = color;
    this.initials = initials;
  }
}

function reload_characters(){
  characters.push(
    new character(
      "Steve",
      "#0000ff",
      "STV"
    )
  )

  characters.push(
    new character(
      "Voice",
      "#0000ff",
      "UKS"
    )
  )

  characters.push(
    new character(
      "Devin",
      "#bb9900",
      "DVN"
    )
  )

  characters.push(
    new character(
      "Voice",
      "#bb9900",
      "UKD"
    )
  )

  characters.push(
    new character(
      "Gurdis Muhm",
      "#cc22aa",
      "GDM"
    )
  )

}

reload_characters();